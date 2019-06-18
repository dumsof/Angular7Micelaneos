import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

/* children: se agregan las rutas hijas que pueden navegar dentro de la pagina 
   se crea un nuevo archivo para las rutas hijas, tambien se podria haber hecho en la misma
   pagina.
*/
import { RUTAS_HIJAS } from './components/usuario/usuario.routes';


const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: RUTAS_HIJAS
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const RUTAS_APLICACION = RouterModule.forRoot(RUTAS);


/* @NgModule({
    imports: [RouterModule.forChild(RUTAS)],
    exports: [RouterModule]
})
export class RoutingModule { }
 */
