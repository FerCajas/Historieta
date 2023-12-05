import { Component, OnInit} from '@angular/core';
import {AnimeServiceService} from '../anime-service.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit{
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
      this.searchResults = resp.data.map((manga: any) => ({
        title: manga.title,
        synopsis: manga.synopsis
      }));
    });
  }
}

