import { Logger } from './../../core/logger.service';
import { Instruction } from './entities/instruction';
import { AccountSection } from './entities/account-section';
import { AccountCb } from './entities/account-cb';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-own-cb',
  templateUrl: './own-cb.component.html',
  styleUrls: ['./own-cb.component.css']
})
export class OwnCbComponent implements OnInit {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  accounts: AccountCb[];
  selectedAccount: AccountCb[];

  allSections: AccountSection[];
  accountSections: AccountSection[];
  accountSectionsLastUpdateTime: string;

  instructions: Instruction[];
  selectedInstructions: Instruction[];

  totalCurrentBalance = 0;
  totalNoResponceCb = 0;
  totalAvailableCb = 0;


  constructor(private http: HttpClient,
    private logger: Logger) { }

  ngOnInit() {
    this.http.get<AccountCb[]>('/api/ownCbAccounts')
      .subscribe(accounts => {
        this.accounts = accounts;
        this.selectedAccount = [this.accounts[0]];
      });

    this.http.get<AccountSection[]>('/api/ownAccountSections')
      .subscribe(sections => {
        this.allSections = sections;
        const secBuff = [];
        for (const a of sections) {
          if (a.accountId === this.selectedAccount[0].id) {
            secBuff.push(a);
          }
        }
        this.accountSections = secBuff;

        for (let i = 0; i < sections.length; i++) {
          this.totalCurrentBalance += sections[i].currentBalance;
          this.totalNoResponceCb += sections[i].noResponceCb;
          this.totalAvailableCb += sections[i].totalAvailableCb;
        }

        this.accountSectionsLastUpdateTime = new Date().toLocaleString('ru-RU');
      });

    this.http.get<Instruction[]>('/api/ownCbinstructions_0')
      .subscribe(instructions => {
        this.instructions = instructions;
      });
  }

  addAccount() { }

  editAccount() { }

  removeAccount() {
    const api_path = '/api/accounts/' + this.selectedAccount[0].id;

    this.http.delete<AccountCb[]>(api_path)
    .subscribe(accounts => {
      this.logger.info('!!!');
      this.accounts = accounts;
      this.selectedAccount[0] = this.accounts[0];
    });

    this.logger.info('1111');

    this.http.get<AccountCb[]>('/api/ownCbAccounts')
      .subscribe(accounts => {
        this.accounts = accounts;
        this.selectedAccount[0] = this.accounts[0];
      });

  }

  refrashAccountSections() {
    this.http.get<AccountSection[]>('/api/ownAccountSections')
      .subscribe(sections => {
        this.accountSections = sections;

        for (let i = 0; i < sections.length; i++) {
          this.totalCurrentBalance += sections[i].currentBalance;
          this.totalNoResponceCb += sections[i].noResponceCb;
          this.totalAvailableCb += sections[i].totalAvailableCb;
        }

        this.accountSectionsLastUpdateTime = new Date().toLocaleString('ru-RU');
      });
  }

  showInstr() { }

  addInstr() { }

  editInstr() { }

  copyInstr() { }

  sendInstr() { }

  removeInstr() {
    // for (const i of this.selectedInstructions) {
    //   if (this.instructions.indexOf(i) !== -1) {
    //     this.instructions.splice(this.instructions.indexOf(i), 1);
    //   }
    // }

    // this.logger.info('' + this.instructions.length);
  }

  cancelInstr() { }

  downloadInstr() { }

  uploadInstr() { }

  printInstr() { }

  updateAllInstr() { }

  accountOnRowSelect(event) {
    if (this.selectedAccount.length === 1) {
      const api_path = '/api/ownCbinstructions_' + this.selectedAccount[0].id;

      this.selectedInstructions = [];

      this.http.get<Instruction[]>(api_path)
        .subscribe(instructions => {
          this.instructions = instructions;
        });

      const secBuff = [];
      for (const a of this.allSections) {
        if (a.accountId === this.selectedAccount[0].id) {
          secBuff.push(a);
        }
      }
      this.accountSections = secBuff;
    } else {
      this.instructions = [];
      this.accountSections = [];
    }
  }

  removeInstrDisable() {
    if (this.selectedInstructions && this.selectedInstructions.length !== 0) {
      for (const i of this.selectedInstructions) {
        if (i.instrStatus !== 'Черновик' && i.instrStatus !== 'К отправке') {
          return true;
        }
      }
    } else {
      return true;
    }
    return false;
  }

  editInstrDisable() {
    if (this.selectedInstructions && this.selectedInstructions.length === 1) {
      return this.selectedInstructions[0].instrStatus !== 'Черновик' && this.selectedInstructions[0].instrStatus !== 'К отправке';
    } else {
      return true;
    }
  }

  canselInstrDisable() {

    const canselInstrEnableSts = [
      'Отправлено',
      'Принято к обработке в НРД',
      'Принято НРД',
      'Принято регистратором/вышестоящим депозитарием'
    ];

    if (this.selectedInstructions && this.selectedInstructions.length !== 0) {
      for (const i of this.selectedInstructions) {
        if (canselInstrEnableSts.indexOf(i.instrStatus) === -1) {
          return true;
        }
      }
    } else {
      return true;
    }
    return false;
  }

  sendInstrDisable() {
    if (this.selectedInstructions && this.selectedInstructions.length !== 0) {
      for (const i of this.selectedInstructions) {
        if (i.instrStatus !== 'К отправке') {
          return true;
        }
      }
    } else {
      return true;
    }
    return false;
  }
}
