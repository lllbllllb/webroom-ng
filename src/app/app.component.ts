import { EventKeeperBoxService } from './core/event-keeper-box.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  showLogin: boolean;

  constructor(private eventKeeperBox: EventKeeperBoxService) { }

  ngOnInit() {
    if (this.eventKeeperBox.isShowLogin() != null) {
      this.eventKeeperBox.isShowLogin()
        .subscribe(i => this.showLogin = i);
    }
  }
}
