import { HttpClient } from '@angular/common/http';
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
        catchError(throwError)
      )
  }
}
