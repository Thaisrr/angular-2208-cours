import { User } from './../../../utils/models/user';
import { UserService } from './../../../utils/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  api = 'https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode';

  joke?: string;

  is_loading = true;

  users?: User[];

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.getJoke();
    this.getUsers();
  }

  getJoke() {
    this.is_loading = true;
    // Ici, Joke est typé à la volée : dans un projet, on aurait une interface
    this.http.get<{joke: string}>(this.api)
      .subscribe({
        next: (res => this.joke = res?.joke),
        complete: () => this.is_loading = false,
        error: (error) => {
          console.info(error.status, error.statusText);
          this.joke = undefined;
          this.is_loading = false;
         }
      })
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: users => this.users = users
    })
  }

}
