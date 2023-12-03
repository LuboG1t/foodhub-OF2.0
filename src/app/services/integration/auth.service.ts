import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreadorRequest} from "../../models/CreadorRequest";
import {AuthRequest} from "../../models/AuthRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:8083/auth';

  constructor(private  http: HttpClient) { }

  registrarCreador(creadorData: CreadorRequest): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string>(`${this.baseURL}/registrar`, creadorData, { headers });
  }

  iniciarSesion(authData: AuthRequest): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.baseURL}/login`, authData, { headers });
  }

}
