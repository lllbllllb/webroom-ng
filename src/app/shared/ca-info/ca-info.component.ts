import { Logger } from './../../core/logger.service';
import { EventKeeperBoxService } from './../../core/event-keeper-box.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-info',
  templateUrl: './ca-info.component.html',
  styleUrls: ['./ca-info.component.css']
})
export class CaInfoComponent implements OnInit {

  reference = 'EGORngTEST';
  orgAccessCode = 'Депонент';
  caType = 'MEET - Собрание';
  caStatus = 'Прием инструкций';
  datePrvd = '';
  dateFix = '';
  datePrdEnd = '10.10.2100';
  emitent = 'PRIME (LA)';
  isin = 'US0909090090РА';
  updated = '10.10.2017 14:45';

  constructor(private eventKeeperBox: EventKeeperBoxService,
    private logger: Logger) { }

  ngOnInit() {
    if (this.eventKeeperBox.getCa()) {
      this.eventKeeperBox.getCa()
        .subscribe(ca => {
          if (ca) {
            this.reference = ca.reference;
            this.caType = ca.type;
            this.caStatus = ca.status;
            this.datePrvd = ca.dateStart;
            this.dateFix = ca.fixDate;
            this.datePrdEnd = ca.dateEnd;
            this.emitent = ca.emitent;
            this.isin = ca.isin;

            sessionStorage.setItem('currentCa', JSON.stringify(ca));
          } else {
            const c = JSON.parse(sessionStorage.getItem('currentCa'));
            this.reference = c.reference;
            this.caType = c.type;
            this.caStatus = c.status;
            this.datePrvd = c.dateStart;
            this.dateFix = c.fixDate;
            this.datePrdEnd = c.dateEnd;
            this.emitent = c.emitent;
            this.isin = c.isin;
          }
        });
    } else {
      this.logger.error('CA not load yet!');
    }
  }

}
