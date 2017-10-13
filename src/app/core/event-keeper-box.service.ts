import { CoreModule } from './core.module';
import { Logger } from './logger.service';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/of';

@Injectable()
export class EventKeeperBoxService {

          breadcrumbChange: BehaviorSubject<MenuItem[]>;

          constructor(private logger: Logger) {
                    this.breadcrumbChange = new BehaviorSubject(null);
          }

          getBreadCrumbsItems(): BehaviorSubject<MenuItem[]> {
                    this.logger.info('2: get');
                    return this.breadcrumbChange;
          }

          setBreadcrumbsItems(breadcrumbs: MenuItem[]) {
                    this.logger.info('1: set');
                    this.breadcrumbChange.next(breadcrumbs);
          }
}
