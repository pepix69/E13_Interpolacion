import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  mensaje:string="¡Hola mundo de las interpolaciones!"
  nombre="Jose"
  edad:number=20

}
