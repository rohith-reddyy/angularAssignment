import { DescendingPipe } from './descending.pipe';
import { AscendingPipe } from './ascending.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { NumberPipe } from './number.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    AssignmentComponent,
    [ AscendingPipe, DescendingPipe,NumberPipe,HighlighterDirective,FormsComponent]
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
