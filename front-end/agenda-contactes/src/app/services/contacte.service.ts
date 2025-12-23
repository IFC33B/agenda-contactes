import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Contacte, ContacteRequest } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ContacteService {
  private apiURL = 'http://localhost:8080/api/contactes';

  // Lista centralizada
  private contactesSubject = new BehaviorSubject<Contacte[]>([]);
  contactes$ = this.contactesSubject.asObservable();

  constructor(private http: HttpClient) { };

  // Obtener todos los contactos
  getAllContactes(): Observable<Contacte[]> {
    return this.http.get<Contacte[]>(this.apiURL)
      .pipe(
        tap((dades) => this.contactesSubject.next(dades)),
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
        tap((nouContacte)  => {
          const actual = this.contactesSubject.value;
          this.contactesSubject.next([...actual, nouContacte])
        }),
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
