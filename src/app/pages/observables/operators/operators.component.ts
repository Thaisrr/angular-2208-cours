import { switchMap } from 'rxjs';
import { CharacterService } from './../../../utils/services/character.service';
import { Character } from './../../../utils/models/character';
import { catchError, filter, map, Observable, tap, of, empty, NEVER, finalize, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  datas: number[] = [];

  data$ = new Observable<number>(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);

    observer.error(new Error('Nope !'));
    observer.next(6);
  })

  character?: Character;

  constructor(private charaService: CharacterService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    /*
    this.route.paramMap.pipe(
        switchMap(params => {
          const id = params.get('id');
          if(id) return this.charaService.get(+id)
          else return EMPTY
        })
    ).subscribe(character => console.log(character))

    this.getCharacter();
        */

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if(id) this.getCharacter(+id);
      else this.getCharacter(1);
    })

    this.data$.pipe(
      tap(d => console.log('Tap : ', d)), // lire la donnée
      map(d => d * 10),
      map(d => d * 10),
      tap(d => console.log('Tap 2 :', d)),
      filter(d => d % 200 === 0),
      catchError(err => { throw new Error('Message personnalisé')} ),
      catchError(err => {
        // gestion de l'erreur
        return EMPTY;
      }),
      finalize(() => console.info('Terminé'))
    ).subscribe({
      next: d => {
        if(d) this.datas.push(d);
      },
      error: err => console.log(err)
    })

  }


  getCharacter(id: number) {
    this.charaService.get(id)
    .subscribe(c => this.character = c)
  }


}
