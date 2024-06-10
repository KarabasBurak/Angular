import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  //templateUrl: './app.component.html',
  template: `
    <!-- // Property Binding
    <input type="text" [value]="title" />
    <app-home [pageName]="title"> </app-home>

    // Two-Way Data Binding
    <input type="text" [(ngModel)]="name" /> -->
  `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, HomeComponent, FormsModule],
})
export class AppComponent {
  title = 'proje1';
  name: string;
}
