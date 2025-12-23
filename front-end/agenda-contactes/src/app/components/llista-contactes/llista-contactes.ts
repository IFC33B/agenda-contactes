import { Component } from '@angular/core';
import { Contacte } from '../../models';
import { ContacteService } from '../../services/contacte.service';

@Component({
  selector: 'llista-contactes',
  imports: [],
  templateUrl: './llista-contactes.html',
  styleUrl: './llista-contactes.css',
})
export class LlistaContactes {
  contactes: Contacte[] = [];
  carregant = true;
  error: string | null = null;

  constructor(private contacteService: ContacteService) { }

  ngOnInit(): void {
    this.carregarContactes();

    // Suscribimos al componente
    this.contacteService.contactes$.subscribe({
      next: (dades) => {
        this.contactes = dades
        this.carregant = false;
      },

      error: (err) => {
        console.log(err);
      }
    })
  }

  // Petición inicial a la API
  carregarContactes() {
    this.carregant = true;
    this.error = null;

    this.contacteService.getAllContactes().subscribe({
      next: () => {
        this.carregant = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los contactos';
        this.carregant = false;
        console.log(err);
      }
    });
  }
}
