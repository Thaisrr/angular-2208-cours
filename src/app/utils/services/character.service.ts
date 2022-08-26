import { Character } from './../models/character';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, catchError, EMPTY, mergeMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { CharacterAPI, Planet } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  api = "https://swapi.dev/api/people";

  constructor(private http: HttpClient) { }

  getAll(): Observable<CharacterAPI[]> {
    return this.http.get<{results: CharacterAPI[]}>(this.api).pipe(
      map(response => response.results),
      catchError(err => this.handleError(err) )
    );
  }

  get(id: number = 1): Observable<Character> {
    return this.http.get<CharacterAPI>(`${this.api}/${id}`).pipe(
      mergeMap(char => this.getPlanet(char.homeworld).pipe(map(planet => ({planet, ...char} as Character)))),
      catchError(err => this.handleError(err))
    )
  }

  getPlanet(url: string): Observable<Planet> {
    return this.http.get<Planet>(url)
  }

  handleError(error: HttpErrorResponse): Observable<never> {

    if(error.status === 404) {
      alert('Ressource innexistante');
      return EMPTY
    }

    if(error.status === 500) {
      alert(`Il y a un problème avec le serveur, rééssayez plus tard`);
      return EMPTY
    }

    alert(error.statusText)
    return EMPTY
  }


}
