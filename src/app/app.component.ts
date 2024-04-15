import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Register } from './views/Register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Register],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss'],
  
})
export class AppComponent {
  title = 'Brutalism Project';
}
