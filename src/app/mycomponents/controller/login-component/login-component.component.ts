import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService} from '../../../Services/auth.service';
import 'rxjs/add/operator/map';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "../../../Services/login";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  email:string;
  password:string;
  login: Login;
  userForm: FormGroup;
  result: number = 0;

constructor(
  private route: ActivatedRoute,
  private router: Router,
  public AuthService : AuthService
) 
  {
   }

   ngOnInit(): void {
    this.userForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]
)
});
 }

 onSelect(): void {
}


  onSubmit() {
    console.log('test01')
    if (this.userForm.valid) {
      console.log('test02')
        let login: Login = new Login(
        this.userForm.controls['email'].value,
        this.userForm.controls['password'].value);
        this.AuthService.finUser(login).subscribe(
          result => {
            this.result = result;
            console.log(result);
            if(this.result == 1)
            {
              console.log('Dans 1');
              this.router.navigate(['/dashboard']);
            }else{
              console.log('Dans 2');
              this.router.navigate(['/dashboard']);
            } 
          },
          err => {
            console.log(err);
          }
        );
     }
  
  }
}
