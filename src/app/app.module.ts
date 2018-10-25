;
import { DescendingPipe } from './descending.pipe';
import { AscendingPipe } from './ascending.pipe';
// import { Custompipe2Pipe } from './custompipe2.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NumberPipe } from './number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    AssignmentComponent,
    [ AscendingPipe, DescendingPipe,NumberPipe]
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
