import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3 class="text-red-500 text-2xl font-bold">Calcular promedio de notas</h3>
    <form (ngSubmit)="calcularPromedio()">
     <div class="flex flex-col gap-y-2">
      <div class="flex gap-2">
        <label>Ingresa Primera nota</label>
        <input class="shadow border border-purple-800 rounded-md w-1/2 px-2" type="number" name="nota1" id="nota1" [(ngModel)] = "nota1"/>
      </div>
      <div class="flex gap-2">
        <label>Ingresa Segunda nota</label>
        <input class="shadow border border-purple-800 rounded-md w-1/2 px-2" type="number" name="nota2" id="nota2" [(ngModel)] = "nota2"/>
      </div>
      <div class="flex gap-2">
        <label>Ingresa Tercera nota</label>
        <input class="shadow border border-purple-800 rounded-md w-1/2 px-2" type="number" name="nota3" id="nota3" [(ngModel)] = "nota3"/>
      </div>
      <div class="flex gap-2">
        <label>Ingresa Cuarta nota</label>
        <input class="shadow border border-purple-800 rounded-md w-1/2 px-2" type="number" name="nota4" id="nota4" [(ngModel)] = "nota4"/>
      </div>
      <div class="flex gap-2">
        <label>Ingresa Quinta nota</label>
        <input class="shadow border border-purple-800 rounded-md w-1/2 px-2" type="number" name="nota5" id="nota5" [(ngModel)] = "nota5"/>
      </div>
     </div>
     <button type="submit" class="rounded-md bg-green-700 p-2 mt-4 text-white cursor-pointer"> Calcular Promedio</button>
    </form>
    <p><strong>Promedio: </strong>{{promedio}}</p>
    <p><strong>Categoria: </strong>{{categoria}}</p>
    <p><strong>Estado: </strong>{{estado}}</p>
  `,
  styles: ``
})
export class NotasComponent {
  nota1:number = 0
  nota2:number = 0
  nota3:number = 0
  nota4:number = 0
  nota5:number = 0
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
