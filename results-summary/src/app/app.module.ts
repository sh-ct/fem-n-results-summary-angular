import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryItemComponent } from './summary-item/summary-item.component';
import { ResultsSummaryComponent } from './results-summary/results-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryItemComponent,
    ResultsSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
