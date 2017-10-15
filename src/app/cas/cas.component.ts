import { Router } from '@angular/router';
import { Logger } from './../core/logger.service';
import { Ca } from './../shared/entities/ca';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { EventKeeperBoxService } from './../core/event-keeper-box.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cas',
  templateUrl: './cas.component.html',
  styleUrls: ['./cas.component.css']
})
export class CasComponent implements OnInit {

  private breadCrumbsItems: MenuItem[];
  cas: Ca[];
  selectedCas: Ca[];

  constructor(private http: HttpClient,
    private eventKeeperBox: EventKeeperBoxService,
    private logger: Logger,
    private router: Router) { }

  ngOnInit() {
    this.fireCurrentBreadCrumbs();

    this.http.get<Ca[]>('/api/cas')
      .subscribe(cas => {
        this.cas = cas;
      });
  }

  fireCurrentBreadCrumbs() {
    this.breadCrumbsItems = [];
    this.breadCrumbsItems[0] = ({ label: 'Web-кабинет' });
    this.breadCrumbsItems[1] = ({ label: 'Корпоративные действия' });

    this.eventKeeperBox.setBreadcrumbsItems(this.breadCrumbsItems);
  }

  refrashCas() { }

  selectCa(ca: Ca) {
    this.eventKeeperBox.setCa(ca);
    this.router.navigate(['corpactions', 'caParams']);
  }
}
