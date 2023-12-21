import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  private url = "http://localhost:3001/archivos"
  constructor(private http:HttpClient) { }
  Get_Api(): Observable <any>{
    return this.http.get(this.url);
  }
}
