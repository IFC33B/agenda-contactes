import { Component, signal } from '@angular/core';
import { LlistaContactes } from './components/llista-contactes/llista-contactes';

@Component({
  selector: 'app-root',
  imports: [LlistaContactes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-contactes');
}
