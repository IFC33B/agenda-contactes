import { Component } from '@angular/core';
import { LlistaContactes } from '../llista-contactes/llista-contactes';
import { FormulariContactes } from '../formulari-contactes/formulari-contactes';

@Component({
  selector: 'app-agenda-contactes',
  imports: [LlistaContactes, FormulariContactes],
  templateUrl: './agenda-contactes.html',
  styleUrl: './agenda-contactes.css',
})
export class AgendaContactes {
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
