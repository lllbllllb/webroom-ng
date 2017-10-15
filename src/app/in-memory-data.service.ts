import { Ca } from './shared/entities/ca';
import { User } from './shared/entities/user';
import { AccountSection } from './ca-params/own-cb/entities/account-section';
import { Instruction } from './ca-params/own-cb/entities/instruction';
import { AccountCb } from './ca-params/own-cb/entities/account-cb';
import { Injectable, OnInit } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  private randomizeOwnCbinstructions: Instruction[];

  private caStatusses: string[] = [
    'Объявлено КД',
    'Прием инструкций',
    'Объявлено КД (без подачи инструкции)Не требуется инструкция',
    'Прием инструкций завершен',
    'Подведены итоги',
    'Завершено',
    'Отменено',
    'Не исполнены обязательства по оплате',
    'Не состоялось'
  ];

  private messageStatusses: string[] = [
    'Черновик',
    'К отправке',
    'Отправлено',
    'Принято к обработке в НРД',
    'Ошибка при обработке в НРД',
    'Принято НРД',
    'Принято регистратором/вышестоящим депозитарием',
    'Отказано НРД',
    'Отказано регистратором/вышестоящим депозитарием',
    'Исполнено',
    'Отменено'
  ];

  private caType: string[] = [
    'BIDS',
    'TEND',
    'MEET',
    'BMET',
    'OMET',
    'GMET',
    'BPUT',
    'PRIO'
  ];

  private caCompType: string[] = [
    'MAND',
    'VOLU'
  ];

  createDb() {

    const mockCredentials: User[] = [
      {
        id: 0,
        username: 'egar',
        password: 'egar',
        name: 'Egor',
        role: 'ADMIN'
      }
    ];

    const ownCbAccounts: AccountCb[] = [
      {
        id: 0, accountNumber: 'TT12345678', accountType: 'Счет депо владельца', storage: 'НКО ЗАО НРД',
        isin: 'US0909090090РА', depoCode: 'US0909090090РА', description: 'PRIME (Los-Angeles)', balance: 1000000000
      },
      {
        id: 1, accountNumber: 'FIass', accountType: 'Счет депо владельца', storage: 'НКО ЗАО НРД',
        isin: 'ass', depoCode: 'ass', description: 'PRIME (Los-Angeles)', balance: 50
      },
    ];

    const ownAccountSections: AccountSection[] = [
      {
        id: 0,
        sectionNumber: '0000000',
        sectionType: 'Банковский',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
        accountId: 0
      },
      {
        id: 1,
        sectionNumber: '00000001',
        sectionType: 'Стартап',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
        accountId: 0
      },
      {
        id: 2,
        sectionNumber: '0000002',
        sectionType: 'Крипровалюта',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
        accountId: 0
      },
      {
        id: 3,
        sectionNumber: '00000000',
        sectionType: 'Крипровалюта',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
        accountId: 1
      },
      {
        id: 4,
        sectionNumber: '0000001',
        sectionType: 'Акции',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
        accountId: 1
      }
    ];

    const ownCbinstructions_0: Instruction[] = [];
    for (let i = 0; i < 100; i++) {
      ownCbinstructions_0.push(
        {
          id: i,
          instrNumber: JSON.stringify(100000 + i),
          instrStatus: this.generatefromGiven(this.messageStatusses),
          instrCreateDate: new Date().toLocaleString('ru-RU'),
          instrrejectionReason: this.generateString(),
          instrCbCount: Math.floor((Math.random() + 1) * 500),
          instrStatusMessageNumber: JSON.stringify(Math.floor(100100 + Math.random() * 10000)),
          instrStatusMessageDat: new Date().toLocaleString('ru-RU'),
          instrSender: 'EGAR Technology Bel',
          instrReceiver: 'НКО ЗАО НРД',
          instrDateSent: new Date().toLocaleString('ru-RU')
        });
    }

    const ownCbinstructions_1: Instruction[] = [];
    for (let i = 0; i < 6; i++) {
      ownCbinstructions_1.push(
        {
          id: i,
          instrNumber: JSON.stringify(100000 + i),
          instrStatus: this.generatefromGiven(this.messageStatusses),
          instrCreateDate: new Date().toLocaleString('ru-RU'),
          instrrejectionReason: this.generateString(),
          instrCbCount: Math.floor(Math.random() * 5 + 1),
          instrStatusMessageNumber: JSON.stringify(Math.floor(100100 + Math.random() * 10000)),
          instrStatusMessageDat: new Date().toLocaleString('ru-RU'),
          instrSender: 'EGAR Technology Bel',
          instrReceiver: 'НКО ЗАО НРД',
          instrDateSent: new Date().toLocaleString('ru-RU')
        });
    }

    const cas: Ca[] = [];
    for (let i = 0; i < 100; i++) {
      cas.push(
        {
          id: i,
          reference: this.generateString(),
          type: this.generatefromGiven(this.caType),
          compType: this.generatefromGiven(this.caCompType),
          status: this.generatefromGiven(this.caStatusses),
          fixDate: new Date().toLocaleString('ru-RU'),
          dateStart: new Date().toLocaleString('ru-RU'),
          dateEnd: new Date().toLocaleString('ru-RU'),
          isin: this.generateString(),
          grn: this.generateString(),
          code: this.generateString(),
          registrator: this.generateString(),
          emitent: this.generateString()
        }
      );
    }

    return { ownCbAccounts, ownCbinstructions_0, ownCbinstructions_1, ownAccountSections, mockCredentials, cas };
  }

  generateString() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const lenght = Math.floor((Math.random() + 1) * 8);

    for (let i = 0; i < lenght; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  generatefromGiven(givenArray: any[]) {
    return givenArray[Math.floor((Math.random()) * givenArray.length)];
  }
}
