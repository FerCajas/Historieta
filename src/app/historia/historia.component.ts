import { Component, OnInit} from '@angular/core';
import {AnimeServiceService} from '../anime-service.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit{
  parrafo:String="Encuentra las mejores historias"
  searchQuery = '';
  control = new FormControl();
  searchResults: any[] = [];
  public listamangas : any = []

  constructor(private AnimeServiceService:AnimeServiceService) { }

  ngOnInit(): void {
    this.optenerdata()
  }
  optenerdata() {
    this.AnimeServiceService.Get_Api(this.searchQuery).subscribe((data: any) => {
      console.log(data);
      var resp: any = data;
      this.searchResults = resp.data.filter((anime: any) =>
        anime.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      ).map((anime: any) => ({
        title: anime.title,
        synopsis: anime.synopsis
      }));
    });
  }
}

