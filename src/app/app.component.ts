import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SueldoComponent } from './sueldo/sueldo.component';
import { NotasComponent } from './notas/notas.component';
import { HeaderComponent } from './header/header.component'
import { WeeklyExerciseComponent } from './weekly-exercise/weekly-exercise.component' 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SueldoComponent, NotasComponent, HeaderComponent, FormsModule, WeeklyExerciseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Semana13';
  nomUser: string = 'KalCio'

  condicion1: boolean = false;
  condicion2: boolean = false;
}
