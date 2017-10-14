import { AccountSection } from './ca-params/own-cb/entities/account-section';
import { Instruction } from './ca-params/own-cb/entities/instruction';
import { AccountCb } from './ca-params/own-cb/entities/account-cb';
import { Injectable, OnInit } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  private randomizeOwnCbinstructions: Instruction[];

  createDb() {

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
        sectionType: 'Первый',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
      },
      {
        id: 1,
        sectionNumber: '00000001',
        sectionType: 'Второй',
        currentBalance: Math.floor((Math.random() + 1) * 500),
        noResponceCb: Math.floor((Math.random() + 1) * 500),
        totalAvailableCb: Math.floor((Math.random() + 1) * 500),
      }
    ];

    const ownCbinstructions_0: Instruction[] = [];
    for (let i = 0; i < 100; i++) {
      ownCbinstructions_0.push(
        {
          id: i,
          instrNumber: JSON.stringify(100000 + i),
          instrStatus: this.generateMessageStatus(),
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
          id: i, instrNumber: JSON.stringify(100000 + i),
          instrStatus: this.generateMessageStatus(),
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

    return { ownCbAccounts, ownCbinstructions_0, ownCbinstructions_1, ownAccountSections };
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

  generateMessageStatus() {
    const possible = [
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

    return possible[Math.floor((Math.random()) * possible.length)];
  }
}
