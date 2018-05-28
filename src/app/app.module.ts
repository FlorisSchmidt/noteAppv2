import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteManagerService } from './note-manager.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteControlsComponent } from './note-controls/note-controls.component';
import { NoteDisplayComponent } from './note-display/note-display.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NoteControlsComponent,
    NoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NoteManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
