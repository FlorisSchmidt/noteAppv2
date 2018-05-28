import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteManagerService {

  constructor() { }

  getNotes():Note[]{
    if(localStorage.getItem('notes')){
      return JSON.parse(localStorage.getItem("notes"));
    }
    return [];
  }

  addNote(name:string):Note[]{
    if(name.trim().length!=0){
      let notes=this.getNotes();
      notes.push(new Note(name,''));
      localStorage.setItem('notes', JSON.stringify(notes));
    }
    return this.getNotes();
  }

  deleteNote(index:number):Note[]{
    let array = this.getNotes();
    array.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(array));
    return this.getNotes();
  }

  getNoteContent(x:string):string{
    let notes = this.getNotes();
    let object = notes.find(j => j.name === x);
    console.log(object);
    return object.content;
  }
}