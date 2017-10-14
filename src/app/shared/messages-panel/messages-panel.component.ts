import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.css']
})
export class MessagesPanelComponent implements OnInit {

  isWarning: boolean;
  messageText: string;

  constructor() { }

  ngOnInit() {
    this.showMessage('test text', false);
  }

  showMessage(text: string, isWarning: boolean) {
    this.messageText = text;
    this.isWarning = isWarning;
  }

}
