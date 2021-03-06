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
import { HomeComponent } from './commponents/interface/home/home.component';
import { DataGraphicsComponent } from './commponents/tables/data-graphics/data-graphics.component';
import { BarComponent } from './commponents/graphics/bar/bar.component';
import { SignInComponent } from './commponents/auth/sign-in/sign-in.component';
import { SignUpComponent } from './commponents/auth/sign-up/sign-up.component';
import { SocketService } from './socket.service';
import { AuthService } from './commponents/auth/auth.service';
import { ProfileComponent } from './commponents/interface/profile/profile.component';
import { ComprasComponent } from './commponents/tables/compras/compras.component';
import { VentasComponent } from './commponents/tables/ventas/ventas.component';
import { BuildSellComponent } from './commponents/modals/build-sell/build-sell.component';

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
    SignUpComponent,
    ProfileComponent,
    ComprasComponent,
    VentasComponent,
    BuildSellComponent,
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
  providers: [SocketService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [SignInComponent, SignUpComponent, VentasComponent, ComprasComponent, BuildSellComponent]
})
export class AppModule { }
