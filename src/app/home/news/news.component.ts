import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
noticias = [{
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
  titulo:'Angular',
  Contenido: 'Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google',
  fecha:'14 de septiembre de 2016'
},{
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png',
  titulo:'React',
  Contenido: 'React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.',
  fecha:'29 de mayo de 2013'
},
{
  img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png',
  titulo:'Vue',
  Contenido: 'Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página.',
  fecha:'febrero de 2014'
}
]
}
