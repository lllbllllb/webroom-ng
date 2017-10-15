import { EventKeeperBoxService } from './../core/event-keeper-box.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showLogin: boolean;

  constructor(private eventKeeperBox: EventKeeperBoxService) { }

  ngOnInit() {
    if (this.eventKeeperBox.isShowLogin() != null) {
      this.eventKeeperBox.isShowLogin()
      .subscribe(i => this.showLogin = i);
    }

  }

}
