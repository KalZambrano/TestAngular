import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [],
  template: `
    <h3 class="text-red-500 text-2xl font-bold">Calcular promedio de notas</h3>
    <p><strong>Promedio: </strong>{{promedio}}</p>
    <p><strong>Categoria: </strong>{{categoria}}</p>
    <p><strong>Estado: </strong>{{estado}}</p>
    <button (click)="calcularPromedio()" class="bg-red-600 text-white rounded-md p-2 cursor-pointer">Calcular promedio</button>
  `,
  styles: ``
})
export class NotasComponent {
  nota1:number = 13
  nota2:number = 15
  nota3:number = 18
  nota4:number = 20
  nota5:number = 18
  promedio:number = 0

  categoria:string = ''
  estado:string = ''

  calcularPromedio(){
    this.promedio = (this.nota1 + this.nota2 + this.nota3 + this.nota4 + this.nota5) / 5
    if(this.promedio >=11 && this.promedio < 18){
      this.categoria = 'Bueno'
      this.estado = 'Aprobado'
    }else if(this.promedio >=18 && this.promedio < 20){
      this.categoria = "Excelente"
      this.estado = 'Aprobado'
    }else{
      this.categoria = 'Malo'
      this.estado = 'Reprobado'
    }
  }
}
