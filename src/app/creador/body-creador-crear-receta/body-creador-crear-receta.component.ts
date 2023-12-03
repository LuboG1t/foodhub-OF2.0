import { Component } from '@angular/core';

@Component({
  selector: 'app-body-creador-crear-receta',
  templateUrl: './body-creador-crear-receta.component.html',
  styleUrls: ['./body-creador-crear-receta.component.css']
})
export class BodyCreadorCrearRecetaComponent {

  ingredientes: { id: number, nombre: string }[] = [{ id: 1, nombre: '' }];
  pasos: { id: number, descripcion: string }[] = [{ id: 1, descripcion: '' }];

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
