import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './../shared/entities/user';
import { Logger } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

          constructor(private http: HttpClient,
                    private logger: Logger) { }

          user: User;
          isLogged: BehaviorSubject<boolean> = new BehaviorSubject(false);

          login(username: string, password: string): BehaviorSubject<boolean> {
                    const mockUsername = 'egar';
                    const mockPassword = 'egar';

                    this.logger.info(username + '__' + password);

                    this.http.get<User[]>('/api/mockCredentials')
                              .subscribe(users => {

                                        this.user = users[0];

                                        if (username === this.user.username && password === this.user.password) {
                                                  localStorage.setItem('isLoggedToWr', 'true');
                                                  this.isLogged.next(true);
                                        }
                              });

                    return this.isLogged;
          }

          logout(): void {
                    localStorage.clear();
                    sessionStorage.clear();
          }

}