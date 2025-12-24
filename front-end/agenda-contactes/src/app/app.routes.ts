import { Routes } from '@angular/router';
import { LlistaContactes } from './components/llista-contactes/llista-contactes';
import { FormulariContactes } from './components/formulari-contactes/formulari-contactes';

export const routes: Routes = [
    {path: '', redirectTo: '/contactes', pathMatch: 'full'},
    {path: 'contactes', component: LlistaContactes},
    {path: 'formulari', component: FormulariContactes}
];
