import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblayoutComponent } from './weblayout.component';

describe('WeblayoutComponent', () => {
  let component: WeblayoutComponent;
  let fixture: ComponentFixture<WeblayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeblayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeblayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
