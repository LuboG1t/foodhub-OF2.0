import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-body-explorador-crear-cuenta',
  templateUrl: './body-explorador-crear-cuenta.component.html',
  styleUrls: ['./body-explorador-crear-cuenta.component.css']
})
export class BodyExploradorCrearCuentaComponent {

  mostrarModalCuentaCreada: boolean = false;

  constructor(private router:Router) {
  }

  validarCamposYCrearCuenta() {
    // Lógica de validación de campos y creación de cuenta
    const exito = this.validarYCrearCuenta();

    if (exito) {
      this.mostrarModalCuentaCreada = true;
    }
  }

  cerrarModalCuentaCreada() {
    this.mostrarModalCuentaCreada = false;
    this.router.navigate(['/iniciarSesion'])

  }

  private validarYCrearCuenta(): boolean {
    // Lógica de validación y creación de cuenta
    // Devuelve true si la cuenta se crea exitosamente, de lo contrario false.
    return true;
  }

}
