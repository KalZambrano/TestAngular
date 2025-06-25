import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise1.component.html',
  styles: ``
})
export class Exercise1Component {
  edad:number = 0
  subtotal:number = 0
  total:number = 0
  descuento:number = 0
  ticketType:string = ''

  paymentBill() {
    if (this.edad < 12){
      this.total = 5
    }else if (this.edad >= 12 && this.edad <= 18){
      this.subtotal = 8
      this.ticketType === 'Estudiante' ? this.descuento = 0.2 : this.descuento = 0
      this.total = this.subtotal - (this.subtotal * this.descuento)
    }else if (this.edad >= 19 && this.edad <= 60){
      this.subtotal = 12
      this.ticketType === 'Adulto Mayor' ? this.descuento = 0.1 : this.descuento = 0
      this.total = this.subtotal - (this.subtotal * this.descuento)
    }else if (this.edad > 60){
      this.total = 6
    }
  }
}
