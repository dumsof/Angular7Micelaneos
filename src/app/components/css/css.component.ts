import { Component, OnInit } from '@angular/core';
/* solo se afecta el parrafo de la plantilla interna, esto debido que angular
le asigna un idenfiricador o scope para los elementos de la plantilla  y otro para los de la pagina
esto con el fin que los elementos de la plantilla y la pagina no colosionen.
*/
@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
  p{
    color: red;
    font-size: 20px;
  }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
