import { Game } from './../formulaires/formulaires.component';
import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent  {

  book_title = new FormControl('Le Seigneur des Anneaux',
    [Validators.required, Validators.maxLength(50), Validators.minLength(2)]
    );
  favorite?: string;

  game_form: FormGroup;

  all_games: Game[] = [];

  formation_form: FormGroup;

  topics = [
    {name: 'Front End', value: 'front'},
    {name: 'Back End', value: 'back'},
    {name: 'Patisserie', value: 'bakery'},
    {name: 'Informatique', value: 'info'}
  ]

  constructor() {
    this.game_form = new FormGroup({
      title: new FormControl('', [Validators.required] ),
      description: new FormControl(),
      studio: new FormControl('', [Validators.required]),
      year: new FormControl(2000, [Validators.required, Validators.min(1900), Validators.max(2025)])
    });


    this.formation_form = new FormGroup({
      name: new FormControl(),
      finished: new FormControl(false),
      trainer: new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl()
      }),
    topics: new FormArray([])
    });
  }

  updateTopics(e : Event) {
      const topics_array = this.formation_form.get('topics') as FormArray;

      const topic = e.target as HTMLInputElement;
      if(topic.checked) {
        const control = new FormControl(topic.value)
        topics_array.push(control);
      } else {
        const index = topics_array.controls.findIndex(control => control.value === topic.value);
        if(index > -1) {
          topics_array.removeAt(index);
        }
      }

  }


  getYearError(): string {
    console.log('in get error');

    const year = this.game_form.controls['year'];
    if(year.touched && year.invalid) {

      if(year.hasError('required')) {
        return 'Veuillez entrer une année';
      }

      if(year.hasError('min')) {
        return `Êtes vous sûr que ce jeu est sorti avant 1900 ?`;
      }

      if(year.hasError('max')) {
        return `Vous vivez dans le futur ?`;
      }
    }

    return '';

  }



  saveBook() {
    if(this.book_title.value) {
      this.favorite = this.book_title.value;
      this.book_title.reset();
    }
  }

  saveGame() {
    console.log(this.game_form.value);
    this.all_games.push(this.game_form.value);
  }


  saveFormation() {
    console.log(this.formation_form.value);
  }

}
