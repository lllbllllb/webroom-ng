import { Logger } from './../../core/logger.service';
import { EventKeeperBoxService } from './../../core/event-keeper-box.service';

import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  breadCrumbsItems: MenuItem[];

  constructor(private eventKeeperBox: EventKeeperBoxService,
    private logger: Logger) { }

  ngOnInit() {
    if (this.eventKeeperBox.getBreadCrumbsItems() != null) {
      this.eventKeeperBox.getBreadCrumbsItems()
        .subscribe(items => this.breadCrumbsItems = items);
    } else {
      this.logger.error('Breadcrombs not load yet!');
    }
  }

}
