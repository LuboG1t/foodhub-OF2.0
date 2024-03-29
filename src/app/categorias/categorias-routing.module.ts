import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent} from "./categorias.component";
import {InicioComponent} from "./inicio/inicio.component";
import {DesayunoComponent} from "./desayuno/desayuno.component";
import {AlmuerzoComponent} from "./almuerzo/almuerzo.component";
import {CenaComponent} from "./cena/cena.component";
import {PostresComponent} from "./postres/postres.component";
import {SuperavitComponent} from "./superavit/superavit.component";
import {DeficitComponent} from "./deficit/deficit.component";
import {CreadorComponent} from "../creador/creador.component";
import {ExploradorComponent} from "../explorador/explorador.component";

const routes: Routes = [

  { path: '', component: CategoriasComponent, children: [{path:"", component: InicioComponent}]},
  { path: 'desayuno', component: CategoriasComponent, children: [{path:"", component: DesayunoComponent}]},
  { path: 'almuerzo', component: CategoriasComponent, children: [{path:"", component: AlmuerzoComponent}]},
  { path: 'cena', component: CategoriasComponent, children: [{path:"", component: CenaComponent}]},
  { path: 'postres', component: CategoriasComponent, children: [{path:"", component: PostresComponent}]},
  { path: 'superavit', component: CategoriasComponent, children: [{path:"", component: SuperavitComponent}]},
  { path: 'deficit', component: CategoriasComponent, children: [{path:"", component: DeficitComponent}]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
