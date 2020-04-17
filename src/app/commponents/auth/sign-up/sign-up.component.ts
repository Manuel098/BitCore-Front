import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  username: string;
  password1: string;
  password2: string;
  email: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  options: FormGroup;

  username: string;
  password1: string;
  password2: string;
  email: string;

  constructor(public dialogRef: MatDialogRef<SignUpComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,fb: FormBuilder) {
    this.options = fb.group({
      username: '',
      password1: '',
      password2: '',
      email: ''
    });
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
