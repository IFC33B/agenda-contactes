import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContacteService {
  private apiURL = 'http://localhost:8080/api/contactes';

  constructor(private http: HttpClient) {};
}
