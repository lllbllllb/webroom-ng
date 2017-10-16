import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Корпоративные действия' },
      { label: 'Уведомления' },
      {
        label: 'Поручения',
        items: [
          { label: 'Аресты' },
          { label: 'Блокировки' },
          { label: 'Универсальные инструкции' }
        ]
      },
      { label: 'Сообщения',
    items: [
      { label: 'Сообщения НРДирект' },
      { label: 'Сообщния из других каналов' }
    ] },
      { label: 'Справочники' },
      { label: 'Настройка кабинета' },
      { label: 'Новости' },
      { label: 'Помощь' }
    ];
  }

}
