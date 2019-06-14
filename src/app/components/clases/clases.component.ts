import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-danger';
  cargando: boolean;

  propiedades: Object = {
    danger: true
  };
  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.cargando = true;
    setTimeout(() => this.cargando = false, 3000);
  }

}
