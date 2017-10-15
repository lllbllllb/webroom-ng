import { Router } from '@angular/router';
import { AuthService } from './../core/auth.service';
import { EventKeeperBoxService } from './../core/event-keeper-box.service';

import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  person = 'Группа компаний "EGAR Technology". Белорусское подразделение "EGAR Technology Bel"';
  personRole = 'Депонент';
  userSurname = 'Иванов И.И.';
  userRole = 'Дупонент_Верификация и отправка';

  displayVersionDialog = false;

  constructor(private authServise: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  showVersionDialog() {
    this.displayVersionDialog = true;
  }

  exit() {
    this.authServise.logout();
    this.router.navigate(['login']);
  }
}
