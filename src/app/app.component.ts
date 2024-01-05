import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { ProvaComponent } from './prova/prova.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent,
    FooterComponent,
    MatTabsModule,
    ProvaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';

  persone = [
    {name: 'Carmine', surname:'Coppola',age:'22',citylives:'Pomigliano'},
    {name: 'Camilla', surname:'De Martino',age:'22',citylives:'San Giorgio a Cremano'},
    {name: 'Attilio', surname:'Di Vicino',age:'25',citylives:'Pianura'},
    {name: 'Vincenzo', surname:'Bucciero',age:'22',citylives:'Pomigliano'},
    {name: 'Mario', surname:'Vista',age:'21',citylives:'Giugliano'},
  ]

  onClick() {
    this.persone = [
      { name: 'Alessia', surname: 'Rossi', age: '28', citylives: 'Milano' },
      { name: 'Luca', surname: 'Ferrari', age: '30', citylives: 'Roma' },
      { name: 'Giulia', surname: 'Bianchi', age: '25', citylives: 'Firenze' },
      { name: 'Marco', surname: 'Verdi', age: '22', citylives: 'Napoli' },
      { name: 'Francesca', surname: 'Gallo', age: '27', citylives: 'Torino' },
    ];
  }
  
}
