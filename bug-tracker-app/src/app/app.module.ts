import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugStatsComponent } from './bug-tracker/views/bugStats.component';
import { BugEditComponent } from './bug-tracker/views/bugEdit.component';
import { BugItemComponent } from './bug-tracker/views/bug-item.component';

import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';
import { BugApiService } from './bug-tracker/services/bugApi.service';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    BugItemComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
