import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NoteManagerService } from '../note-manager.service';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.css']
})
export class NoteDisplayComponent implements OnInit {
  content:string;
  editing:boolean=true;
  
  constructor(
    private NoteManagerService: NoteManagerService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    try {this.getNoteContent();}
    catch(e){
      this.router.navigateByUrl('');
    }
    this.router.events.subscribe(e => {if(e instanceof NavigationEnd){
      this.getNoteContent();
      this.editing=false;
    }
    }
  )
  
  }

  getNoteContent(){
    const name=this.ActivatedRoute.snapshot.paramMap.get('name');
    this.content=this.NoteManagerService.getNoteContent(name);
  }

  saveContent(){
    const name=this.ActivatedRoute.snapshot.paramMap.get('name')
    this.NoteManagerService.saveNote(name, this.content);
    this.editing=false;

  }

  clearField(){
    this.content='';
  }

  toggleEdit(){
    this.editing?this.editing=false:this.editing=true;
  }
}
