import { Logger } from './logger.service';
import { AccountCb } from './../ca-params/own-cb/entities/account-cb';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OwnCbDataServiceService {

          constructor(private http: HttpClient,
                    private logger: Logger) { }

          private _ownCbAccounts: AccountCb[];

          getAccounts(): AccountCb[] {
                    this.http.get<AccountCb[]>('/api/ownCbAccounts')
                              .subscribe(accounts => {
                                        this._ownCbAccounts = accounts;
                              });

                    return this._ownCbAccounts;
          }
}
