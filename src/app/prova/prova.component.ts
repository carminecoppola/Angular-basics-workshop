import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [
    CommonModule, 
    ProvaComponent,
  ],
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit{
  
  ngOnInit(): void {
    console.log('ngOnInit')

  }
}
