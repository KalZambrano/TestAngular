import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise2.component.html',
  styles: ``
})
export class Exercise2Component {
  edad:number = 0;
  grupoEtario:string = ''

  designarGrupo(){
    if (this.edad > 0 && this.edad < 12) {
      this.grupoEtario = 'Niño';
    }else if (this.edad >= 12 && this.edad <= 17){
      this.grupoEtario = 'Adolescente'
    }else if (this.edad >= 18 && this.edad <= 64){
      this.grupoEtario = 'Adulto'
    }else if(this.edad >= 65){
      this.grupoEtario = 'Adulto Mayor'
    }else{
      this.grupoEtario = 'Edad no válida'
    }
  }
}
