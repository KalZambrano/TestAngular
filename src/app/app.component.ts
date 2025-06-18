import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SueldoComponent } from './sueldo/sueldo.component';
import { NotasComponent } from './notas/notas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SueldoComponent, NotasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Semana13';
  valorContador: number = 0
  incrementarContador(){
    this.valorContador++;
  }
  decrementarContador(){
    this.valorContador--;
  }
}
