import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariContactes } from './formulari-contactes';

describe('FormulariContactes', () => {
  let component: FormulariContactes;
  let fixture: ComponentFixture<FormulariContactes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariContactes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariContactes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
