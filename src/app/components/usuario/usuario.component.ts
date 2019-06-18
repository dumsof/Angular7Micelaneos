import { Component, OnInit } from '@angular/core';
/* como obtener la informacion del parametro de la url */
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) {
    this.ruta.params.subscribe(parametro => {
      console.log('PARAMETRO RUTA PADRE');
      console.log(parametro);
    });
  }

  ngOnInit() {
  }

}
