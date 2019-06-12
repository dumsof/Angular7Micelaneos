/* se crea con el comando ng g c components/ngStyle -it -is
-it crea el template y -is crea el styles[]
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamanio">
     Hola Mundo.. Esta es una etiqueta html.
    </p>

    <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
    <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
    <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
