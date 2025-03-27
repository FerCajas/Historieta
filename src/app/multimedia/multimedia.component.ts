import { Component } from '@angular/core';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent {
  images = [
    'https://m.media-amazon.com/images/M/MV5BMGVhZTY1YTctOWJlYS00MjcxLTlkNDgtYTUxZTM5MzMzZjI2XkEyXkFqcGc@._V1_.jpg',
    'https://images.bauerhosting.com/legacy/empire-tmdb/films/603/images/7u3pxc0K1wx32IleAkLv78MKgrw.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80',
    'https://www.t-systems.com/resource/image/1007596/ratio3x2/1440/960/e74e1dbd56ae03ec1dfde7dc26b634d3/70C7C7845E345A2EC2B3E79C3F4631D1/im-quantum-computing-use-cases.jpg',
    'https://s1.elespanol.com/2024/08/17/enclave-ods/historias/878922213_248531354_1706x1280.jpg',
    'https://i.ytimg.com/vi/n51issoMs2A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhr-MYDhAEFT3ayaya_oCaphjxQQ',
    'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2021-12/Telosa-ciudad-futurista-b2d97c.jpg',
    'https://www.t-systems.com/resource/image/1007666/ratio3x2/1440/960/e74e1dbd56ae03ec1dfde7dc26b634d3/CDFAFB848ABF9B560A76783174EB2F35/im-quantum-computing-use-cases.jpg',
    'https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/32060cbfaae0274be2394aefcfc35e4f.jpg',
    'https://assets.xboxservices.com/assets/20/38/203850f5-1bed-4912-b25f-193ee890c97f.jpg?n=Fortnite_GLP-Page-Hero-1084_876951_1920x1080.jpg'
  ];

  selectedImage: string | null = null;

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
