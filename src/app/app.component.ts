import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

/*
  - Importiamo i componenti personalizzati definiti in altri file.
  In sintesi, AppComponent è il componente principale dell'app Angular,
  composto da altri componenti come PersonalInfoComponent, MyDashboardComponent,
  e NavbarComponent. Il suo template contiene i tag HTML corrispondenti a questi
  componenti, e la classe AppComponent contiene eventuali dati o logica specifica
  del componente.
*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    PersonalInfoComponent,
    MyDashboardComponent, 
    NavbarComponent
  ],
  template: `
    
    <app-navbar></app-navbar>
    <app-personal-info></app-personal-info>
    <app-my-dashboard></app-my-dashboard>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova';
}
