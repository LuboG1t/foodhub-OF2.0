import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-body-explorador-iniciar-sesion',
  templateUrl: './body-explorador-iniciar-sesion.component.html',
  styleUrls: ['./body-explorador-iniciar-sesion.component.css']
})
export class BodyExploradorIniciarSesionComponent implements OnInit{
public tipo: string ="";

  constructor(private router:Router, private sharedService:SharedService) {}

  ngOnInit() {
    this.tipo="vacio"
    this.sharedService.setTipo(this.tipo);
    console.log("tipo vacio: ",this.tipo)
  }

  llevarCreador(){
    this.tipo="creador"
    this.sharedService.setTipo(this.tipo);
    console.log("tipo creador: ",this.tipo)
    this.router.navigate(['/ingresar']);
  }
}

