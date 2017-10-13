import { EventKeeperBoxService } from './../core/event-keeper-box.service';

import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  person = 'noname test person very-very long noname test person very-very long noname test person very-very long';
  personRole = 'Депонент';
  userSurname = 'Иванов И.И.';
  userRole = 'Дупонент_Верификация и отправка';

  displayVersionDialog = false;

  constructor(private eventKeeperBox: EventKeeperBoxService) { }

  ngOnInit() {
  }

  showVersionDialog() {
    this.displayVersionDialog = true;
  }
}
