import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneMaskDirective } from './phone-mask.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, PhoneMaskDirective ],
   exports: [
    PhoneMaskDirective
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
