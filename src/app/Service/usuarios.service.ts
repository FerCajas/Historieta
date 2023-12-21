import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../Interfaces/Usuarios';
import { Observable } from 'rxjs';
import { Login } from 'src/app/Interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = 'http://localhost:3001/usuarios';
  constructor(private http:HttpClient) { }
  guardarUsuarios(usuarios:Usuarios): Observable <any>{
     return this.http.post(this.url,usuarios)
  }

  Login(login:Login): Observable<any> {
    return this.http.get<any>(`${this.url}/${login}`);
  }
}
