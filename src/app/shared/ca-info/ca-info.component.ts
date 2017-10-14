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

  constructor() { }

  ngOnInit() {
  }

}
