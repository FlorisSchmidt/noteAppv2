import { Component, OnInit } from '@angular/core';
import { NoteManagerService } from '../note-manager.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-controls',
  templateUrl: './note-controls.component.html',
  styleUrls: ['./note-controls.component.css']
})
export class NoteControlsComponent implements OnInit {

  constructor(private NoteManager: NoteManagerService) { }
  notes:Note[];
  private addField:string;

  ngOnInit() {
    this.notes = this.NoteManager.getNotes();
  }

  addNote(){
    this.notes = this.NoteManager.addNote(this.addField);
    this.addField = '';
  }

  deleteNote(index:number){
    this.notes = this.NoteManager.deleteNote(index);
  }
}
