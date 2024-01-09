import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../directive/highlight.directive';


@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [
    CommonModule, 
    ProvaComponent,
    HighlightDirective
  ],
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit{

  colore = ''
  
  cambiaColoreEvidenziatore(colore : string){
    this.colore = colore
  }

  ngOnInit(): void {
    console.log('ngOnInit')

  }
}
