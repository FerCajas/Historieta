import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {
  private url = 'https://api.jikan.moe/v4/anime';
  private urlm = 'https://api.jikan.moe/v4/manga'
  constructor(private http:HttpClient) { }
  public Get_Api(query: string){
    const url = `${this.url}/anime?q=${query}`;
    return this.http.get(this.url);
  }

  public Get_ApiMnaga(query: string){
    const url = `${this.urlm}/manga?q=${query}`;
    return this.http.get(this.urlm)

  }
}

