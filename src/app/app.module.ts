import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatStepperModule, MatFormFieldModule, MatInputModule, 
  MatSelectModule, MatListModule, MatButtonModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
