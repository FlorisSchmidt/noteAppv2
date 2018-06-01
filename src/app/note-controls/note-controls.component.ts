import { Component, OnInit } from '@angular/core';
import { NoteManagerService } from '../note-manager.service';
import { Note } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-controls',
  templateUrl: './note-controls.component.html',
  styleUrls: ['./note-controls.component.css']
})
export class NoteControlsComponent implements OnInit {

  constructor(private NoteManager: NoteManagerService,
  private router: Router) { }
  notes:Note[];
  private addField:string;

  ngOnInit() {
    this.notes = this.NoteManager.getNotes();
  }

  addNote(){
    if(this.NoteManager.noteExists(this.addField)){
      console.log("this note already exists");
      return;
    }
    this.notes = this.NoteManager.addNote(this.addField);
    this.router.navigateByUrl('/notes/'+this.addField);
    this.addField = '';
  }

  deleteNote(index:number){
    this.notes = this.NoteManager.deleteNote(index);
    this.router.navigateByUrl('');
  }
}
