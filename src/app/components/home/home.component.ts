/* ciclo de vida de la pagina estos eventos o metodos inician con el oninit */
import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <hr>
  <p></p>
  <h2>Aplicar estilos a un solo componente</h2>

  <app-css></app-css>
  <p>
      Hola mundo desde app.components, no lo afecta la definición de estilos interna.
  </p>
  <p></p>
  <hr>
  <h2>Agregando clases de estilos en nuestros componentes</h2>

  <app-clases></app-clases>
  <hr>
  <h4>Usando una directiva</h4>
  <p appResaltar>Cambiar el fondo con directiva</p>
  <p [appResaltar]="'blue'">Cambiar el fondo con directiva enviado parametro nuevo color</p>
  <hr>
  <h4>ngSwicht Multiples opciones</h4>
  <app-ng-switch [alerta]="'warning'"></app-ng-switch>

  <hr>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { console.log('constructor'); }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
