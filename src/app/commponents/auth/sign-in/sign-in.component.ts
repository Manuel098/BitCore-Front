import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  username: string;
  user_url: string;
  caracterAdded;
  caracter;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  options: FormGroup;

  username;
  user_url;
  newCaract;
  value;
  caracter;
  checked = false;

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(public dialogRef: MatDialogRef<SignInComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,fb: FormBuilder) {
    this.options = fb.group({
      username: '',
      user_url: '',
      value:'',
      caracter :'',
      newCar:''
    });
    console.log(data.caracter[0]['charName']);

    this.options.value['username'] = data.username;
    this.options.value['user_url'] = data.user_url;
    this.caracter = data.caracter;
    console.log(data.caracter[0]['charName']);
  }

  ngOnInit() {
  }

  add(){
    this.data.caracterAdded.push({caracter:this.newCaract, value:this.options.value['value'], newCara:this.options.value['newCar']});
  }
  print(value){
    console.log(value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
