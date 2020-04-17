import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  username: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  options: FormGroup;

  username: string;
  password: string;
  email: string;

  constructor(public dialogRef: MatDialogRef<SignInComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,fb: FormBuilder) {
    this.options = fb.group({
      username: '',
      password: '',
      email: ''
    });
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
