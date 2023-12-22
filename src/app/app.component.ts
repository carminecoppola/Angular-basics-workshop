import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonalInfoComponent ,MyDashboardComponent],
  template: `
    
    <app-personal-info></app-personal-info>
    <app-my-dashboard></app-my-dashboard>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova';
}
