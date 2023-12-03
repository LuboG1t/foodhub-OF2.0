import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";
import {AuthRequest} from "../../models/AuthRequest";
import {AuthService} from "../../services/integration/auth.service";

@Component({
  selector: 'app-body-explorador-iniciar-sesion',
  templateUrl: './body-explorador-iniciar-sesion.component.html',
  styleUrls: ['./body-explorador-iniciar-sesion.component.css']
})
export class BodyExploradorIniciarSesionComponent implements OnInit{
public tipo: string ="";
  authData: AuthRequest = {
    identificador: '',
    contrasenia: ''
  };

  constructor(private router:Router, private sharedService:SharedService, private authService: AuthService) {}

  ngOnInit() {
    this.tipo="vacio"
    this.sharedService.setTipo(this.tipo);
  }


  iniciarSesion(): void {

    this.authService.iniciarSesion(this.authData).subscribe(response => {
      this.tipo="creador"
      this.sharedService.setTipo(this.tipo);
      console.log('Respuesta del servidor:', response);
      this.router.navigate(['/ingresar']);
    }, error => {
        console.error('Error al iniciar sesión:', error);
      });
  }
}

