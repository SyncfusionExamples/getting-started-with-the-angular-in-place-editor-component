import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InPlaceEditorModule } from '@syncfusion/ej2-angular-inplace-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InPlaceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
