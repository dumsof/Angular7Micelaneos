/*para crear una directiva se utiliza el comando: ng g d diretives/resaltar, 
  en este caso la directiva se llamara resaltar
  -se necesita pasar el objeto como referencia, para esto se importa ElementRef.
*/
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  /*se obtiene el elemento en este caso parafo en la variable: elemento y se 
  cambian las propiedades de stylos
  */
  constructor(private elemento: ElementRef) {
    console.log('directiva llamada');

    elemento.nativeElement.style.backgroundColor = "red";
    elemento.nativeElement.style.color = "white";

  }
  /*capturar un valor que se pasa x parametro de la directiva
    en este caso se debe colocar el selector de la directiva y
    el tipo de valor que se esta pasando como parametro.
  */
  @Input('appResaltar') nuevoColor: string;


  /*HostListener: permite agregar eventos o comportamientos a la directivas,
    en este caso cuando el mause entre al elemento que contiene la directiva esta
    cambiara a fondo negro y letras rojas.
  */
  @HostListener('mouseenter') mauseEntro() {
    this.resaltarColorParametro(this.nuevoColor || 'yellow');
  }
  @HostListener('mouseleave') mauseSalio() {
    this.elemento.nativeElement.style.backgroundColor = "red";
    this.elemento.nativeElement.style.color = "white";
  }
  private resaltarColorParametro(color: string) {
    console.log('dentro de la función ' + color);
    this.elemento.nativeElement.style.backgroundColor = color;
    this.elemento.nativeElement.style.color = "black";
  }
}
