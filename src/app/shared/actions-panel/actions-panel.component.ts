import { Router } from '@angular/router';
import { EventKeeperBoxService } from './../../core/event-keeper-box.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.css']
})
export class ActionsPanelComponent implements OnInit {

  constructor(private eventKeeperBox: EventKeeperBoxService, private router: Router) { }

  ngOnInit() {
  }

  actionsPanelPrint() { }

  actionsPahelShowHistory() { }

  actionsPanelBack() {
    this.eventKeeperBox.goBack();
  }
}
