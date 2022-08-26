import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = environment.api_url + '/users';


  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.api}/${id}`)
  }

  getUserByEmail(email: string): Observable<User> {
    const params = new HttpParams()
      .set('email', email) // créé ou remplacer les params existants
      .append('param2', 'value2') // ajouter une valeur aux params
      .appendAll({param3: 'value3', param4: 'value4'})
    /*
    get(param2) -> retourne la valeur du param2
    getAll-> retourne l'objet de paramétres
    delete(param3)
    has(param3) -> boolean
    */
   const headers = new HttpHeaders()
      .set('Authentication', 'Bearer ejwjkllsdfsfjdslkmfds')
    /* Même principe pour les headers */

    return this.http.get<User>(this.api, {
      params: {
        email,
        param2: 'value2',
      },
      headers : {
        Authentication : 'Bearer ejxjkjdskfdjsklfs'
      }
    })
  }


  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.api, user, {
      params: {},
      headers: {}
    })
  }


  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.api, user, {
      params: {},
      headers: {}
    })
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.api}/${id}`, {})
  }



}
