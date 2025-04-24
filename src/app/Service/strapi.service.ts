import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Carrusel {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string[];
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class StrapiService {

  private baseUrl = 'http://localhost:1337/api/carrusels';

  constructor(private http: HttpClient) {}


  getCarruseles(): Observable<{ data: Carrusel[] }> {
    return this.http.get<{ data: Carrusel[] }>(`${this.baseUrl}?populate=*`);
  }
}



