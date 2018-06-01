import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDisplayComponent } from '../note-display/note-display.component';

const routes: Routes = [
  { path: 'notes/:name', component: NoteDisplayComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
