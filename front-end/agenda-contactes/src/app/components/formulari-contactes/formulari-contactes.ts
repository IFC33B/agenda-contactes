import { Component } from '@angular/core';
import { ContacteService } from '../../services/contacte.service';
import { ContacteRequest } from '../../models';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'formulari-contactes',
  imports: [FormsModule],
  templateUrl: './formulari-contactes.html',
  styleUrl: './formulari-contactes.css',
})
export class FormulariContactes {
  carregant = false;
  error: string | null = null;

  // datos del formulario
  nom: string = '';
  telefon: string = '';
  email: string = '';

  constructor(private contacteService: ContacteService) { }

  // Añadir contacto
  afegirContactes() {
    this.carregant = true;
    this.error = null;

    // Request
   const contacteRequest: ContacteRequest = {nom: this.nom, telefon: this.telefon, email: this.email};

    // Service
    this.contacteService.createContacte(contacteRequest).subscribe({
      next: (dades) => {
        this.carregant = false
        this.nom = '';
        this.telefon = '';
        this.email = '';
      },

      error: (err) => {
        this.error = 'Error al añadir un contacto'
        this.carregant = false
        console.log(err);
      }
    })
  }
}
