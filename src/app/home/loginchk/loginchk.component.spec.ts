import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginchkComponent } from './loginchk.component';

describe('LoginchkComponent', () => {
  let component: LoginchkComponent;
  let fixture: ComponentFixture<LoginchkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginchkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginchkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
