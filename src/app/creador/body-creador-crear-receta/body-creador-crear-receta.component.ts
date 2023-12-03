import { Component } from '@angular/core';
import {Categoria} from "../../models/categoria";
import {Ingrediente, Instruccion, RecetaRequest} from "../../models/RecetaRequest";
import {RecetaService} from "../../services/integration/receta.service";

@Component({
  selector: 'app-body-creador-crear-receta',
  templateUrl: './body-creador-crear-receta.component.html',
  styleUrls: ['./body-creador-crear-receta.component.css']
})
export class BodyCreadorCrearRecetaComponent {

  // titulo: string = '';
  // descripcion: string = '';
  // tiempoCoccion: number = 0;
  // porciones: number = 0;
  // calorias: number = 0;
  // imagen: string = '';
  // categoria: Categoria | null = null;
  // ingredientes: Ingrediente[] = [];
  // instrucciones: Instruccion[] = [];


  ingredientes: { id: number, nombre: string }[] = [{ id: 1, nombre: '' }];
  pasos: { id: number, descripcion: string }[] = [{ id: 1, descripcion: '' }];

  constructor(private recetaService: RecetaService) {
  }

  agregarIngrediente() {
    const nuevoId = this.ingredientes.length + 1;
    this.ingredientes.push({ id: nuevoId, nombre: '' });
  }

  eliminarIngrediente(id: number) {
    if (this.ingredientes.length > 1) {
      const index = this.ingredientes.findIndex(ingrediente => ingrediente.id === id);
      this.ingredientes.splice(index, 1);
    }
  }

  agregarPaso() {
    const nuevoId = this.pasos.length + 1;
    this.pasos.push({ id: nuevoId, descripcion: '' });
  }

  eliminarPaso(id: number) {
    if (this.pasos.length > 1) {
      const index = this.pasos.findIndex(paso => paso.id === id);
      this.pasos.splice(index, 1);
    }
  }

}
