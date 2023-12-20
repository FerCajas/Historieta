import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'http://localhost:3001/usuarios';
  constructor(private http:HttpClient) { }
  guardarDatos(datos: any) {
    return this.http.post(this.url, datos);
  }
}
