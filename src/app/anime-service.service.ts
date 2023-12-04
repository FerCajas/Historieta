import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {
  private url = 'https://api.jikan.moe/v4/anime';
  constructor(private http:HttpClient) { }
  public Get_Api(){
    return this.http.get(this.url);
  }
}
