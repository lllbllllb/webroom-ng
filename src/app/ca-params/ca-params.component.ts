import { EventKeeperBoxService } from './../core/event-keeper-box.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-ca-params',
  templateUrl: './ca-params.component.html',
  styleUrls: ['./ca-params.component.css']
})
export class CaParamsComponent implements OnInit {

  private breadCrumbsItems: MenuItem[];

  text: string;

  constructor(private eventKeeperBox: EventKeeperBoxService) { }

  ngOnInit() {
    this.fireCurrentBreadCrumbs();
  }

  fireCurrentBreadCrumbs() {
    this.breadCrumbsItems = [];
    this.breadCrumbsItems[0] = ({ label: 'Web-кабинет' });
    this.breadCrumbsItems[1] = ({ label: 'Корпоративные действия' });
    this.breadCrumbsItems[2] = ({ label: 'Параметры Корпоративного действия' });

    this.eventKeeperBox.setBreadcrumbsItems(this.breadCrumbsItems);
  }

}