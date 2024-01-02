import { NgModule } from '@angular/core';
import { UserAuthModule } from './user-auth/user-auth.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InnerComponentComponent } from './dummyMod/inner-component/inner-component.component';
import { InStyleComponent } from './in-style/in-style.component';
import { InTempComponent } from './in-temp/in-temp.component';
import { InStyleTempComponent } from './in-style-temp/in-style-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerComponentComponent,
    InStyleComponent,
    InTempComponent,
    InStyleTempComponent,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
