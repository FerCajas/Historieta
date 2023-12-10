import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  getComputerChoice(): string {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  game(userChoice: string): void{
    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);
    switch (playUserComp){
      case 'rs':
      case 'sp':
      case 'pr':
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        break;
    }

  }


}
