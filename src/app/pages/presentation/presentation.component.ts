import { Component} from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent {

  data = 'Hello World !';
  user = {
    nom: 'Jean Michel',
    age : 322,
  }

  ma_classe = 'toto';
  image = {
    url: 'https://i.redd.it/oy272bhkejb61.png',
    description: 'Angry Space Sheep',
    title: 'Space Sheep',
  }

  condition = true;



  constructor() {
    console.log(typeof this.user);

  }

}
