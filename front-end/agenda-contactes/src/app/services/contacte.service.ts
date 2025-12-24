import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contacte, ContacteRequest } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ContacteService {
  private apiURL = 'http://localhost:8080/api/contactes';

  constructor(private http: HttpClient) { };

  // Obtener todos los contactos
  getAllContactes(): Observable<Contacte[]> {
    return this.http.get<Contacte[]>(this.apiURL)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Obtener un contacto
  getContacte(nom: string): Observable<Contacte> {
    return this.http.get<Contacte>(`${this.apiURL}/${nom}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Añadir contacto
  createContacte(contacteRequest: ContacteRequest): Observable<Contacte> {
    return this.http.post<Contacte>(this.apiURL, contacteRequest)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Gestión de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Error: ${error.error.message}`
    } else {
      // Error del servidor
      errorMessage = `Codigo de error: ${error.status}, Mensaje: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(() => Error(errorMessage))
  }
}
