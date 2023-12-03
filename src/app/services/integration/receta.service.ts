import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreadorRequest} from "../../models/CreadorRequest";

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private baseURL = 'http://localhost:8083/explorar';

  constructor(private http: HttpClient) { }

  crearReceta(receta: CreadorRequest): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/crear`, receta);
  }

}
