import { Component } from '@angular/core';

@Component({
  selector: 'app-sueldo',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-green-400 text-2xl font-semibold">Calcular sueldo</h2>
    <p><strong>Sueldo Base: </strong>{{sueldoBase}}</p>
    <p><strong>Descuento AFP (12%): </strong>{{descuentoAFP}}</p>
    <p><strong>Bonificación (5%): </strong>{{bonificacion}}</p>
    <p><strong>Sueldo Total:</strong> {{sueldoTotal}}</p>
    <button (click)="calcularSueldoTotal()" class="rounded-md bg-green-700 p-2 text-white cursor-pointer"> Calcular Sueldo Total</button>
  `,
  styles: ``
})
export class SueldoComponent {
  sueldoBase:number = 1500
  descuentoAFP:number = 0
  bonificacion:number = 0
  sueldoTotal:number = 0

  calcularSueldoTotal(){
    this.descuentoAFP = this.sueldoBase * 0.12
    this.bonificacion = this.sueldoBase * 0.5
    this.sueldoTotal = this.sueldoBase - this.descuentoAFP + this.bonificacion
  }
}
