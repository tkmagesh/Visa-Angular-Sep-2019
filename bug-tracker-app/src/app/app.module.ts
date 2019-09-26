import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugStatsComponent } from './bug-tracker/views/bugStats.component';
import { BugEditComponent } from './bug-tracker/views/bugEdit.component';

import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { TrimTextPipe } from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe,
    TrimTextPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [
    BugOperationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
