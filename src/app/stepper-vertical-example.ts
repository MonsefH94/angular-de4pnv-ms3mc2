import { Component, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
export interface PeriodicElement {
  compId: string;
  lotId: string;
  laserMark: string;
  partID: string;
  si: number;
  sio2: number;
  process: string;
  slot: number;
  bso: boolean;
  psimos: boolean;
  vbd: boolean;
  secco: boolean;
  lst: boolean;
  lotType: string;
  stage: string;
  esi: string;
  esio: string;
  am: string;
  lotcmnt: string;
  engineer: string;
  supplier: string;
  partbu: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    compId: '3Y11970.17',
    lotId: '3Y11970.1',
    laserMark: 'ID0GMDG',
    partID: '8PRD10449M.01',
    si: 2200,
    sio2: 30000,
    process: 'P3KAR2',
    slot: 1,
    bso: true,
    psimos: false,
    vbd: true,
    secco: true,
    lst: false,
    lotType: 'PR',
    stage: 'TM_CHOIX',
    esi: '2190.52',
    esio: '30300',
    am: 'ASM31',
    lotcmnt: ' ',
    engineer: 'EIF',
    supplier: 'SEH',
    partbu: '3377.01',
  },
];
/**
 * @title Stepper vertical
 */
@Component({
  selector: 'stepper-vertical-example',
  templateUrl: 'stepper-vertical-example.html',
  styleUrls: ['stepper-vertical-example.css'],
})
export class StepperVerticalExample {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    sdCtrl: [{ value: 'R0013', disabled: true }],
  });
  secondFormGroup = this._formBuilder.group({
    Name: ['', Validators.required],
    RequestorDep: ['', Validators.required],
    Adresse: ['', Validators.required, Validators.email],
    Phone: ['', Validators.required],
    ResultsDate: ['', Validators.required],
    Describleneed: ['', Validators.required],
    Other: ['', Validators.required],
    Process: ['', Validators.required],
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  displayedColumns: string[] = [
    'compId',
    'lotId',
    'laserMark',
    'partID',
    'si',
    'sio2',
    'process',
    'slot',
    'bso',
    'psimos',
    'vbd',
    'secco',
    'lst',
    'lotType',
    'stage',
    'esi',
    'esio',
    'am',
    'lotcmnt',
    'engineer',
    'supplier',
    'partbu',
  ];

  dataSource: any;

  isLinear = false;
  lists: string[];
  isCanAdd: boolean;
  checked: boolean;
  typedp: string;
  color: ThemePalette = 'accent';

  disabled = false;
  disabledJustif: boolean;

  carrieridPromis = ['3X25353.1', '9999'];

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.isCanAdd = true;
    this.checked = false;
    this.typedp = 'Dépot Manip';
    this.dataSource = ELEMENT_DATA;
  }

  typedpcheck(): void {
    this.checked = !this.checked;
    this.refreshDepot();
  }

  change(event: any): void {
    const inputValue = event.target.value;
    this.carrieridPromis.includes(inputValue)
      ? (this.checked = true) && (this.disabled = true)
      : (this.checked = false);
    this.refreshDepot();
    if (inputValue == '') {
      this.disabled = false;
    }
  }

  refreshDepot(): void {
    this.checked ? (this.typedp = 'Dépôt Prod') : (this.typedp = 'Dépôt Manip');
  }

  check(element: PeriodicElement[]): void {
    const newData = this.dataSource;
    newData.vpd = !newData.vpd;
    this.dataSource = newData;
  }

  choise(event: any): void {
    const inputValue = event.target.value;
    inputValue == 'Other'
      ? (this.disabledJustif = true)
      : (this.disabledJustif = false);
  }
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
