import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { EventKeeperBoxService } from './../core/event-keeper-box.service';

@Component({
  selector: 'app-cas',
  templateUrl: './cas.component.html',
  styleUrls: ['./cas.component.css']
})
export class CasComponent implements OnInit {

  private breadCrumbsItems: MenuItem[];

  constructor(private eventKeeperBox: EventKeeperBoxService) { }

  ngOnInit() {
    this.fireCurrentBreadCrumbs();
  }

  fireCurrentBreadCrumbs() {
    this.breadCrumbsItems = [];
    this.breadCrumbsItems[0] = ({ label: 'Web-кабинет' });
    this.breadCrumbsItems[1] = ({ label: 'Корпоративные действия' });

    this.eventKeeperBox.setBreadcrumbsItems(this.breadCrumbsItems);
  }
}
