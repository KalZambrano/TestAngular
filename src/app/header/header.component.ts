import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  nombre: string = '';
  apellido: string = 'Diaz';
  edad: number = 0;
  especialidad: string = 'Desarrollador Web';
  sueldo: number = 1800;


  pais: string = 'Argentina';
  elegibleParaVotar: string = '';

  verificarElegible(){
    if (this.edad >=18 && (this.pais == 'Argentina' || this.pais == 'Mexico' || this.pais == 'Peru')) {
      this.elegibleParaVotar = 'Eres elegible para votar';
    }else if (this.edad >16 && this.edad<=18 && (this.pais == 'Brasil' || this.pais == 'Colombia')){
      this.elegibleParaVotar = 'Eres elegibre para voatr pero con restricciones'
    }else{
      this.elegibleParaVotar = 'No eres elegible para votar'
    }
  }
}
