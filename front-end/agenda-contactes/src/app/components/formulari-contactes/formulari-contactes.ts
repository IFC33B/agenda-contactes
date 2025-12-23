import { Component, signal } from '@angular/core';
import { ContacteService } from '../../services/contacte.service';
import { ContacteRequest } from '../../models';

@Component({
  selector: 'app-formulari-contactes',
  imports: [],
  templateUrl: './formulari-contactes.html',
  styleUrl: './formulari-contactes.css',
})
export class FormulariContactes {
  carregant = signal(false);
  error = signal<string | null>(null);

  // datos del formulari
  nom: string = '';
  telefon: string = '';
  email: string = '';

  constructor(private contacteService: ContacteService) { }

  // Añadir contacto
  afegirContactes() {
    this.carregant.set(true);
    this.error.set(null);

    // Request
   const contacteRequest: ContacteRequest = {nom: this.nom, telefon: this.telefon, email: this.email};

    // Service
    this.contacteService.createContacte(contacteRequest).subscribe({
      next: (dades) => {
        this.carregant.set(false)
      },

      error: (err) => {
        this.error.set('Error al añadir un contacto')
        this.carregant.set(false);
        console.log(err);
      }
    })
  }
}
