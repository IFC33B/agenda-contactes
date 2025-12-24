import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaContactes } from './llista-contactes';

describe('LlistaContactes', () => {
  let component: LlistaContactes;
  let fixture: ComponentFixture<LlistaContactes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaContactes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaContactes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
