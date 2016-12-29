import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our feature module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// our app component
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TeslaBatteryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
