import { Component, signal } from '@angular/core';
import { AgendaContactes } from './components/agenda-contactes/agenda-contactes';

@Component({
  selector: 'app-root',
  imports: [AgendaContactes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
