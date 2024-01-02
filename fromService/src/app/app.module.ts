import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonincComponent } from './buttoninc/buttoninc.component';
import { LabelincComponent } from './labelinc/labelinc.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonincComponent,
    LabelincComponent
  ],
  imports: [
    BrowserModule,FormsModule//forms module is the module that is is used to practice 2 way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
