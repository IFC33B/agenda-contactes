import { Component, signal } from '@angular/core';
import { Contacte } from '../../models';
import { ContacteService } from '../../services/contacte.service';

@Component({
  selector: 'app-llista-contactes',
  imports: [],
  templateUrl: './llista-contactes.html',
  styleUrl: './llista-contactes.css',
})
export class LlistaContactes {
  missatges = signal<Contacte[]>([]);
  carregant = signal(true);
  error = signal<string | null>(null);

  constructor(private contacteService: ContacteService) {}

}
