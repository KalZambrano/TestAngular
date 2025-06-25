import { Component } from '@angular/core';
import { Exercise1Component } from '../components/exercise1/exercise1.component'
import { Exercise2Component } from '../components/exercise2/exercise2.component'

@Component({
  selector: 'app-weekly-exercise',
  standalone: true,
  imports: [Exercise1Component, Exercise2Component],
  templateUrl: './weekly-exercise.component.html',
  styles: ``
})
export class WeeklyExerciseComponent {

}
