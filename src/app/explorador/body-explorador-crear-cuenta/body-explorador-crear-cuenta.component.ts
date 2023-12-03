import { Component } from '@angular/core';
import {AuthService} from "../../services/integration/auth.service";
import {CreadorRequest} from "../../models/CreadorRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-body-explorador-crear-cuenta',
  templateUrl: './body-explorador-crear-cuenta.component.html',
  styleUrls: ['./body-explorador-crear-cuenta.component.css']
})
export class BodyExploradorCrearCuentaComponent {
  creadorData: CreadorRequest = {
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correoElectronico: '',
    contrasenia: '',
    codigoColegiatura: ''
  };

  constructor(private router: Router, private authService: AuthService) {
  }

  registrarCreador(): void {
    this.authService.registrarCreador(this.creadorData).subscribe((response) => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/ingresar']);
      }, error => {
        console.error('Error al registrar:', error);
      });
  }

}
