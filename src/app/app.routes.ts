import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const RUTAS_APLICACION = RouterModule.forRoot(RUTAS);


/* @NgModule({
    imports: [RouterModule.forChild(RUTAS)],
    exports: [RouterModule]
})
export class RoutingModule { }
 */
