import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OrphelinsComponent } from './mycomponents/models/orphelins/orphelins.component';
import { AddOrphelinsComponent } from './mycomponents/controller/add-orphelins/add-orphelins.component';
import { ListOrphelinsComponent } from './mycomponents/controller/list-orphelins/list-orphelins.component';
import { ProfilOrphelinsComponent } from './mycomponents/controller/profil-orphelins/profil-orphelins.component';
import { MenuComponent } from './mycomponents/includes/menu/menu.component';
import { FooterComponent } from './mycomponents/includes/footer/footer.component';
import { HeaderComponent } from './mycomponents/includes/header/header.component';
import { AuthService} from './Services/auth.service';
import { LoginComponentComponent } from './mycomponents/controller/login-component/login-component.component';


const Routes : Routes = [
  {path :'' , component: LoginComponentComponent},
  { path:'dashboard',component:AddOrphelinsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OrphelinsComponent,
    AddOrphelinsComponent,
    ListOrphelinsComponent,
    ProfilOrphelinsComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponentComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
