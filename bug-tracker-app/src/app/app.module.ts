import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    TrimTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
