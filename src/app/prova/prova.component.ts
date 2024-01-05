import {Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [
    CommonModule, 
    ProvaComponent
  ],
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
