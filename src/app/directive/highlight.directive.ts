import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/* Creare direttiva semplice
   Passare dati ad una direttiva
   Aggiungere una seconda proprietà
 */


@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight = ''

  @Input() defaultColor = ''

  constructor(private element :ElementRef) { 

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.cambiaColore(this.appHighlight || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.cambiaColore('transparent')
  }

  cambiaColore(colore: string){
    this.element.nativeElement.style.backgroundColor = colore
  }
}
