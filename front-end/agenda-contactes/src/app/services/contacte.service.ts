import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contacte } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ContacteService {
  private apiURL = 'http://localhost:8080/api/contactes';

  constructor(private http: HttpClient) {};

  // Obtener un contacto
  getContacte(id: number): Observable<Contacte> {
    return this.http.get<Contacte>(`${this.apiURL}/${id}`)
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
