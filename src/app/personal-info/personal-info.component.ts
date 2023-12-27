import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { setInterval } from 'timers';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})

//, AfterContentChecked, AfterContentInit,AfterViewChecked, AfterViewInit, DoCheck, OnDestroy

export class PersonalInfoComponent implements OnInit{
  
/* 01)String Interpolation:
    Utilizzo una variabile per il nome della persona nella card e per il ruolo, 
    dopodiche nel file .html utilizzo {{nome_variabile}}
*/

  persone = [
    {
      name: 'Carmine',
      surname: 'Coppola',
      role: 'Web Developer',
      description: 'View and manage all the information related to yourself. Edit your Personal Avatar, Email and Password, and Personal Details.'
    },
    {
      name: 'Camilla',
      surname: 'De Martino',
      role: 'Full Stack Developer',
      description: 'View and manage all the information related to yourself.' 
    }
  ];
        

  /*02) Propety Binding:
    è una tecnica che consente di collegare dinamicamente il valore di una proprietà HTML 
    a una variabile nel componente TypeScript. Nel tuo esempio, isDisabled potrebbe essere
    utilizzato per controllare lo stato di disabilitazione di un elemento nell'interfaccia
    utente.
  */

    //isDisabled = false

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked")
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

}
