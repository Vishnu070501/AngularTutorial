import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { GenderPipe } from './gender.pipe';
import { AspipeassgmtComponent } from './aspipeassgmt/aspipeassgmt.component';
import { ShirtsizePipe } from './shirtsize.pipe';
import { AttributedirectComponent } from './attributedirect/attributedirect.component';
import { ApphighliterDirective } from './apphighliter.directive';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    StructuraldirectivesComponent,
    GenderPipe,
    AspipeassgmtComponent,
    ShirtsizePipe,
    AttributedirectComponent,
    ApphighliterDirective
  ],
  imports: [
    BrowserModule,FormsModule//forms module should be imported to practice 2 way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
