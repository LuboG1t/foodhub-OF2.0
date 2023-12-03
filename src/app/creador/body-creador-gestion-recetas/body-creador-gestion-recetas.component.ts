import {Component, OnInit} from '@angular/core';
import {CreadorService} from "../../services/integration/creador.service";

@Component({
  selector: 'app-body-creador-gestion-categorias',
  templateUrl: './body-creador-gestion-recetas.component.html',
  styleUrls: ['./body-creador-gestion-recetas.component.css']
})
export class BodyCreadorGestionRecetasComponent implements OnInit {
  cantidadRecetas: number | undefined;

  constructor(private creadorService: CreadorService) {
  }

  ngOnInit() {
    this.obtenerCantidadRecetas();
  }

  obtenerCantidadRecetas() {
    this.creadorService.obtenerCantidadRecetas().subscribe((cant) => {
      this.cantidadRecetas = cant;
    },
      (error) => {
        console.error('Error al obtener la cantidad de recetas:', error);
      }
    );
  }

}
