import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilOrphelinsComponent } from './profil-orphelins.component';

describe('ProfilOrphelinsComponent', () => {
  let component: ProfilOrphelinsComponent;
  let fixture: ComponentFixture<ProfilOrphelinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilOrphelinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilOrphelinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
