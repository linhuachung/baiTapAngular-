import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnwayBindingComponent } from './onway-binding.component';

describe('OnwayBindingComponent', () => {
  let component: OnwayBindingComponent;
  let fixture: ComponentFixture<OnwayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnwayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnwayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
