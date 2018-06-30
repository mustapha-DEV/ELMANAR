import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrphelinsComponent } from './list-orphelins.component';

describe('ListOrphelinsComponent', () => {
  let component: ListOrphelinsComponent;
  let fixture: ComponentFixture<ListOrphelinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrphelinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrphelinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
