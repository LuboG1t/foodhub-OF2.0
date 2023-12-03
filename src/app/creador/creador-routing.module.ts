import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreadorComponent} from "./creador.component";
import { BodyCreadorExplorarRecetasComponent} from "./body-creador-explorar-recetas/body-creador-explorar-recetas.component";
import { BodyCreadorGestionRecetasComponent} from "./body-creador-gestion-recetas/body-creador-gestion-recetas.component";
import {BodyCreadorMiPerfilComponent} from "./body-creador-mi-perfil/body-creador-mi-perfil.component";
import {BodyCreadorCrearRecetaComponent} from "./body-creador-crear-receta/body-creador-crear-receta.component";
import {CategoriasComponent} from "../categorias/categorias.component";
import {InicioComponent} from "../categorias/inicio/inicio.component";
import {DesayunoComponent} from "../categorias/desayuno/desayuno.component";
import {AlmuerzoComponent} from "../categorias/almuerzo/almuerzo.component";
import {CenaComponent} from "../categorias/cena/cena.component";
import {PostresComponent} from "../categorias/postres/postres.component";
import {SuperavitComponent} from "../categorias/superavit/superavit.component";
import {DeficitComponent} from "../categorias/deficit/deficit.component";

const routes: Routes = [

  { path: '', component: CreadorComponent, children: [ {path: '', component: BodyCreadorExplorarRecetasComponent}]},
  { path: 'gestionDeRecetas', component: CreadorComponent, children: [ {path: '', component: BodyCreadorGestionRecetasComponent}]},
  { path: 'miPerfil', component: CreadorComponent, children: [ {path: '', component: BodyCreadorMiPerfilComponent}]},
  { path: 'crearReceta', component: CreadorComponent, children: [ {path: '', component: BodyCreadorCrearRecetaComponent}]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreadorRoutingModule { }
