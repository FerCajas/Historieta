import { Component, OnInit } from '@angular/core';
import { AnimeServiceService } from 'src/app/anime-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
titulo:String = "Mangas"
search = ''
searchResults: any[] = [];

constructor(private AnimeServiceService:AnimeServiceService){}

ngOnInit(): void {
    this.Obtenerdatos()
}

Obtenerdatos(){
  this.AnimeServiceService.Get_ApiMnaga(this.search).subscribe((data:any)=>{
console.log(data);
var resp: any = data;
this.searchResults = resp.data.filter((manga: any)=>
manga.title.toLowerCase().includes(this.search.toLowerCase())
).map((manga:any)=>({
  title: manga.title,
  url: manga.url,
}));
  });

}

}
