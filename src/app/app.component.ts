import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DessertsComponent } from './components/desserts/desserts.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DessertsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trencin-skoleni';
}
