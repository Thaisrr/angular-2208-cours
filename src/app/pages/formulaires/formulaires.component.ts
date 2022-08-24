import { Component} from '@angular/core';
export type Game = {title: string, studio: string, description: string, year: number}

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent  {


    book  = 'A la Croisée des Mondes';
    book2 = 'Vernom Subutex';

    game: Game = {
        title: '',
        studio: '',
        description: ``,
        year: 0
    }

    all_games: Game[] = [];


    // Inutile avec [(ngModel)]
    updateBook(event: Event) {
      const input = event.target as HTMLInputElement;
        this.book = input.value;
    }

    saveBook() {
      alert(`Vous avez sauvegardé : ${this.book}`)
    }

    saveBook2() {
      alert(`Vous avez sauvegardé : ${this.book2}`)
    }

    saveGame() {
      this.all_games.push({...this.game});
    }


}
