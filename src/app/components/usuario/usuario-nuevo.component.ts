import { Component, OnInit } from '@angular/core';
/* como obtener la informacion del parametro de la url 
en la ruta se utiliza .parent para indicar que se quiere el valor
de la ruta del padre, esta se capturara en la ruta hija.
*/
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) {
    this.ruta.parent.params.subscribe(parametro => {
      console.log('Parametro padre ruta hija');
      console.log(parametro);
    });
  }

  ngOnInit() {
  }

}
