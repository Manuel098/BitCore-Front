import { Component, OnInit } from '@angular/core';

export interface data {
  month: string;
  path1: number;
  path2: number;
}

const BitData: data[] = [
  {month:'January',path1:65, path2:28},
  {month:'February',path1:59, path2:48},
  {month:'March',path1:80, path2:40},
  {month:'April',path1:81, path2:19},
  {month:'May',path1:56, path2:86},
  {month:'June',path1:55, path2:27},
  {month:'July',path1:40, path2:90},
];

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  displayedColumns: string[] = ['month', 'path1', 'path2'];
  dataSource = BitData;
  constructor() { }

  ngOnInit() {
  }
}
