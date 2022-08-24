import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

  // Math.random : retourne un nombre entre 0 et 1
  is_logged = Math.random() > 0.5;

  livres = ['Frankenstein', 'Le Horla', 'Dracula'];

  login() {
    this.is_logged = !this.is_logged;
  }

}
