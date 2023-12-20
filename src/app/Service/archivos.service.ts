import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  private url = 'http://localhost:3001/archivos';
  constructor(private http:HttpClient) { }
  public Get_Api(){
    return this.http.get(this.url);
  }
}
