import { Component, OnInit} from '@angular/core';
import { GameService } from 'src/app/Service/game.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit {
resultado: String = '';
puntosUsuario = 0;
puntosPC =  0;
titulo: String = "Juego Piedra-Papel-Tijera"
img1 = 'https://i1.wp.com/mbshumansolutions.com/blog/wp-content/uploads/2015/03/piedra.png?resize=639%2C312'
img2='https://upload.wikimedia.org/wikipedia/commons/3/3f/Paper_sheet.jpg'
img3='https://kywitiendaenlinea.com/wp-content/uploads/2023/08/909785.webp'
seleccion: String = 'Selecciona Jugada';

constructor(private playGame: GameService) {}

ngOnInit(): void {
  this.resultado = 'Esperando jugada...';
  console.log(this.puntosUsuario);
}

play(choice: string): void {
  this.playGame.game(choice);
}

}
