import { interval, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit, OnDestroy  {

  getData(): Observable<number> {
    return new Observable(observer => {
      observer.next(1);
      observer.next(2);
     // observer.error(new Error('Nope !'));
      observer.next(3);
      observer.complete();
    })
  }



  // Créé un observable qui envoit une donnée toutes les 1s
  interval$: Observable<number> = interval(1000);

  subscription?: Subscription;


  constructor() {
    console.log('Constructor');
    //this.getData().subscribe(data => console.log('data : ', data));
  }

  ngOnInit(): void {
      // Initialisation du composant
      console.log('On Init')

      this.getData().subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(`--- ça marche pas !`, error),
        complete: () => console.log('Finito !')
      })
      console.log('Après souscription');


      this.subscription = this.interval$.subscribe({
        next: (count) => console.info('[interval] ', count),
        error: (err) => console.info('[interval] ERROR : ', err),
        complete: () => console.info('[interval] interval is complete !')
      })
  }


  ngOnDestroy(): void {
      console.info('Destruction du composant Présentation');
      this.subscription?.unsubscribe();
  }


}
