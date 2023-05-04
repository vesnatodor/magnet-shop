import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticTherapyComponent } from './magnetic-therapy.component';

describe('MagneticTherapyComponent', () => {
  let component: MagneticTherapyComponent;
  let fixture: ComponentFixture<MagneticTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagneticTherapyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagneticTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
