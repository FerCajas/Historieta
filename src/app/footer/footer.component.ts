import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  currentYear: number = 0;
  Parrafos=[
    {path: "La historia es la ciencia social encargada de estudiar los eventos del pasado de la humanidad a través de distintasmetodologías que analizan el contexto social, político, económico,geográfico y psicológico del hombre a través de su entorno."},
    {path: "La animación es un proceso utilizado por uno o más animadores, para dar la ilusión de movimiento a imágenes, dibujos u otro tipo de objetos inanimados"},
    {path:"las Historietas son un formato de contenido visual que permite a los creadores crear fácilmente videos cortos, imágenes o animaciones"}
  ];

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}

