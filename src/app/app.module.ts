import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindbirthComponent } from './findbirth/findbirth.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FindbirthComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
