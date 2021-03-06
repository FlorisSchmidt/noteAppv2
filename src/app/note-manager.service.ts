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

  getNoteContent(name:string):string{
    let notes = this.getNotes();
    let object = notes.find(j => j.name === name);
    return object.content;
  }

  saveNote(name:string, noteContent:string){
    let notes = this.getNotes();
    notes[notes.findIndex(j => j.name == name)].content = noteContent;
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  noteExists(name){
    name=name.trim();
    if(this.getNotes().find(j=>j.name==name)==undefined){
      return false;
    } return true;
  }
}