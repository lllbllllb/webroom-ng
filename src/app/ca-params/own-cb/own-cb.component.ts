import { Instruction } from './entities/instruction';
import { AccountSection } from './entities/account-section';
import { AccountCb } from './entities/account-cb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own-cb',
  templateUrl: './own-cb.component.html',
  styleUrls: ['./own-cb.component.css']
})
export class OwnCbComponent implements OnInit {

  accounts: Account[];

  accountSections: AccountSection[];

  instructions: Instruction[];
  selectedInstructions: Instruction[];

  totalCurrentBalance = 0;
  totalNoResponceCb = 0;
  totalAvailableCb = 0;


  constructor() { }

  ngOnInit() {
    this.instructions = [
      {
        id: 0, instrNumber: '121212', instrStatus: 'ewwew', instrCreateDate: '01.01.2000',
        instrrejectionReason: 'fdfdff', instrCbCount: 123, instrStatusMessageNumber: 'fdfdff',
        instrStatusMessageDat: 'fdfdff', instrSender: 'fdfdff', instrReceiver: 'fdfdff', instrDateSent: 'qweeq'
      },
      {
        id: 1, instrNumber: '121212', instrStatus: 'ewwew', instrCreateDate: '01.01.2000',
        instrrejectionReason: 'fdfdff', instrCbCount: 123, instrStatusMessageNumber: 'fdfdff',
        instrStatusMessageDat: 'fdfdff', instrSender: 'fdfdff', instrReceiver: 'fdfdff', instrDateSent: 'qweeq'
      }
    ];
  }

  addAccount() { }

  editAccount() { }

  removeAccount() { }

  showInstr() { }

  addInstr() { }

  editInstr() { }

  copyInstr() { }

  sendInstr() { }

  removeInstr() { }

  cancelInstr() { }

  downloadInstr() { }

  uploadInstr() { }

  printInstr() { }

  updateAllInstr() { }

}
