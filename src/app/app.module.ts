import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import{
  MatButtonToggleModule, MatTableModule, MatIconModule, MatProgressSpinnerModule, MatInputModule, MatCardModule,
  MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
  MatOptionModule, MatCheckboxModule, MatBadgeModule, MatButtonModule, MatRadioModule
}from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTS
import { LinesComponent } from './commponents/graphics/lines/lines.component';
import { HomeComponent } from './commponents/home/home.component';
import { DataGraphicsComponent } from './commponents/tables/data-graphics/data-graphics.component';
import { BarComponent } from './commponents/graphics/bar/bar.component';
import { SignInComponent } from './commponents/auth/sign-in/sign-in.component';
import { SignUpComponent } from './commponents/auth/sign-up/sign-up.component';

const material = [
  MatButtonToggleModule, MatTableModule, MatIconModule, MatProgressSpinnerModule, MatInputModule, MatCardModule,
  MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
  MatOptionModule, MatCheckboxModule, MatBadgeModule, MatButtonModule, MatRadioModule
];

const forms = [ReactiveFormsModule, FormsModule];

@NgModule({
  declarations: [
    AppComponent,
    LinesComponent,
    HomeComponent,
    DataGraphicsComponent,
    BarComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    forms,
    material,
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent]
})
export class AppModule { }
