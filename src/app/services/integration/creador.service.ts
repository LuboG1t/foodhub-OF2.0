import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreadorService {
  private baseURL = 'http://localhost:8083/creador';

  constructor(private http: HttpClient) { }

  obtenerCantidadRecetas(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/cantidadRecetas`)
  }

  // modificarPerfil(fotoPerfil: string): Observable<string> {
  //   const request = { fotoPerfil };
  //   return this.http.patch<string>(`${this.baseURL}/perfil`, request);
  // }

}
