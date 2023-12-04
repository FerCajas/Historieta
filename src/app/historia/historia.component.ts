import { Component, OnInit} from '@angular/core';
import {AnimeServiceService} from '../anime-service.service'

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit{
  public listamangas : any = []

  constructor(private AnimeServiceService:AnimeServiceService) { }

  ngOnInit(): void {
    this.llenardata()
  }
  llenardata() {
    this.AnimeServiceService.Get_Api().subscribe((data: any) => {
      console.log(data);
      var resp: any = data;
      this.listamangas = resp.data.map((manga: any) => ({
        title: manga.title,
        synopsis: manga.synopsis
      }));
    });
  }
}

