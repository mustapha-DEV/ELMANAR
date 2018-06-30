import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrphelinsComponent } from './add-orphelins.component';

describe('AddOrphelinsComponent', () => {
  let component: AddOrphelinsComponent;
  let fixture: ComponentFixture<AddOrphelinsComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrphelinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrphelinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
