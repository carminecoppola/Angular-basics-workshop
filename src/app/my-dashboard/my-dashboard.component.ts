import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgModel } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf, NgSwitch, NgStyle } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    NgIf,NgFor,NgSwitch,NgStyle,

  ],
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css'],
})
export class MyDashboardComponent {
  title = 'corso-angular';

  /* 3)Event Binding:
      è un meccanismo in Angular che permette di associare un'azione (come una funzione o un metodo) 
      a un evento specifico generato da un elemento DOM nell'interfaccia utente.
      - Utilizzo in TypeScript: 
      Nel codice TypeScript, si definisce una funzione che rappresenta l'azione da eseguire quando
      si verifica l'evento. Questa funzione viene poi associata all'evento nell'HTML utilizzando 
      la sintassi:  (nomeEvento)="funzioneDaEseguire($event)"
  */
  onInput(event: Event) {
    // Puoi fare anche senza cast e quindi passare any
    console.log((<HTMLInputElement>event.target).value);
  }

  /* 4)Two Way Binding
      è un concetto in Angular che consente di mantenere sincronizzati sia il modello 
      (la variabile nel codice TypeScript) che la vista (l'elemento nell'HTML). 
      Qualsiasi modifica al modello si riflette automaticamente nella vista e viceversa.
      - Utilizzo in TypeScript e HTML:
        Si utilizza la direttiva [(ngModel)] per creare un 
        collegamento bidirezionale tra una proprietà del 
        componente e un elemento dell'interfaccia utente, 
        come un campo di input. Questo permette di 
        aggiornare sia il modello che la vista 
        simultaneamente.
  */

  onInput2(event: Event) {
    // Puoi fare anche senza cast e quindi passare any
    this.title = (<HTMLInputElement>event.target).value;
  }

  onClick(event: any) {
    // Puoi fare anche senza cast e quindi passare any
    this.title = 'Ho cliccato il bottone per il cambio titolo';
  }

  /* - Elementi Condizionali con NgIF 
      In generale, con l'utilizzo di *ngIf è stato implementata la logica di rendering condizionale
      per gestire dinamicamente la visibilità degli elementi in base a una condizione specifica
      nel componente Angular.
      In questo caso, utilizziamo *ngIf per controllare la visibilità di diversi elementi in 
      base alla lunghezza dell'username inserito nel campo di input.
  */

  username = '';
  isVisible = false;

  formInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    this.isVisible = this.username.length > 4;
  }


  /* - NgFOR */
  persone = [
    {name: 'Carmine', surname:'Coppola',age:'22',citylives:'Pomigliano',isOnline: true,sex:'M'},
    {name: 'Camilla', surname:'De Martino',age:'22',citylives:'San Giorgio a Cremano',isOnline: true,sex:'F'},
    {name: 'Attilio', surname:'Di Vicino',age:'25',citylives:'Pianura',isOnline: false,sex:'M'},
    {name: 'Vincenzo', surname:'Bucciero',age:'22',citylives:'Pomigliano',isOnline: false,sex:'M'},
    {name: 'Mario', surname:'Vista',age:'21',citylives:'Giugliano',isOnline: true,sex:'M'},
  ]
}
