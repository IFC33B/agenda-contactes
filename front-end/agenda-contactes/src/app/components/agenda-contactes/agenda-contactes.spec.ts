import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaContactes } from './agenda-contactes';

describe('AgendaContactes', () => {
  let component: AgendaContactes;
  let fixture: ComponentFixture<AgendaContactes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaContactes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaContactes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
