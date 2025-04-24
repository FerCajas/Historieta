import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../Service/strapi.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarruselComponent implements OnInit {
  carruseles: any[] = [];

  constructor(private strapiService: StrapiService) {}

  ngOnInit(): void {
    this.strapiService.getCarruseles().subscribe(
      (response) => {
        console.log('Datos recibidos:', response);
        this.carruseles = response.data;
      },
      (error) => {
        console.error('Error al obtener los carruseles', error);
      }
    );
  }
}



