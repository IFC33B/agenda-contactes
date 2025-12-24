import { Component, signal } from '@angular/core';
import { Contacte } from '../../models';
import { ContacteService } from '../../services/contacte.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'llista-contactes',
  imports: [ReactiveFormsModule],
  templateUrl: './llista-contactes.html',
  styleUrl: './llista-contactes.css',
})
export class LlistaContactes {
  contactes = signal<Contacte[]>([]);
  carregant = signal(true);
  error = signal<string | null>(null);

  cercaText = new FormControl('')

  constructor(private contacteService: ContacteService) {}

  ngOnInit(): void {
    this.carregarContactes()
  }

  // Cargar contactos
  carregarContactes() {
    this.carregant.set(true);
    this.error.set(null);

    // Service
    this.contacteService.getAllContactes().subscribe({
      next: (dades) => {
        this.contactes.set(dades)
        this.carregant.set(false)
      },

      error: (err) => {
        this.error.set('Error al cargar los contactos')
        this.carregant.set(false);
        console.log(err);
      }
    })
  }

  // Búsqueda de contactos
  cercarContacte(): Contacte[] {
    const valor = this.cercaText.value;
    if (!valor) {
      return this.contactes();
    }

    const q = String(valor).toLowerCase();
    return this.contactes().filter(c => c.nom.toLowerCase().includes(q))
  }
}
