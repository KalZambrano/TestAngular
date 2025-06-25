import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sueldo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2 class="text-green-400 text-2xl font-semibold">Calcular sueldo</h2>
    <form (ngSubmit)="calcularSueldoTotal()">
     <div class="flex flex-col">
      <label>Ingresa tu sueldo</label>
      <input class="shadow border border-purple-800 rounded-md w-1/2 px-2" type="number" name="sueldoBase" id="sueldoBase" [(ngModel)] = "sueldoBase"/>
     </div>
     <button type="submit" class="rounded-md bg-green-700 p-2 mt-4 text-white cursor-pointer"> Calcular Sueldo Total</button>
    </form>
    
    <p><strong>Descuento AFP (12%): </strong>{{descuentoAFP}}</p>
    <p><strong>Bonificación (5%): </strong>{{bonificacion}}</p>
    <p><strong>Sueldo Total:</strong> {{sueldoTotal}}</p>
  `,
  styles: ``
})
export class SueldoComponent {
  sueldoBase:number = 0
  descuentoAFP:number = 0
  bonificacion:number = 0
  sueldoTotal:number = 0

  calcularSueldoTotal(){
    this.descuentoAFP = this.sueldoBase * 0.12
    this.bonificacion = this.sueldoBase * 0.5
    this.sueldoTotal = this.sueldoBase - this.descuentoAFP + this.bonificacion
  }
}
