import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  nTrans: string;
  canti: string;
}

@Component({
  selector: 'app-build-sell',
  templateUrl: './build-sell.component.html',
  styleUrls: ['./build-sell.component.scss']
})
export class BuildSellComponent implements OnInit {
  options: FormGroup;

  nTrans: string;
  canti: string;
  favoriteSeason: string;
  trans: string[] = ['Compra', 'Venta'];

  constructor(public dialogRef: MatDialogRef<BuildSellComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,fb: FormBuilder) {
    this.options = fb.group({
      nTrans: '',
      canti: ''
    });
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
