import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgModel } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

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
  ],
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css'],
})
export class MyDashboardComponent {

  title = 'corso-angular'

  /* 3)Event Binding:
      è un meccanismo in Angular che permette di associare un'azione (come una funzione o un metodo) 
      a un evento specifico generato da un elemento DOM nell'interfaccia utente.
      - Utilizzo in TypeScript: 
      Nel codice TypeScript, si definisce una funzione che rappresenta l'azione da eseguire quando
      si verifica l'evento. Questa funzione viene poi associata all'evento nell'HTML utilizzando 
      la sintassi:  (nomeEvento)="funzioneDaEseguire($event)"
  */
  onInput(event: Event) { // Puoi fare anche senza cast e quindi passare any
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

  
  onInput2(event: Event) { // Puoi fare anche senza cast e quindi passare any
   this.title = ((<HTMLInputElement>event.target).value)
  }

  onClick(event: any) { // Puoi fare anche senza cast e quindi passare any
    this.title = 'Ho cliccato il bottone per il cambio titolo'
  }
}
