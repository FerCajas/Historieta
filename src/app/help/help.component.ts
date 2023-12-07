import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  images = [
    { path: 'https://www.alura.com.br/artigos/assets/html-css-js/imagem-1.png' },
    { path: 'https://images.ctfassets.net/c63hsprlvlya/6dRcoWOuzvM4HBuvHBCyow/2d0c350d12a57051d027895ff8db7bba/what-is-micro-frontend.webp' },
    { path: 'https://www.suratica.es/wp-content/uploads/2020/10/que-es-el-backend-y-que-es-el-frontend-1.jpg' }
  ];
}
