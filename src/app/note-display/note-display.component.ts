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
  
  constructor(
    private NoteManagerService: NoteManagerService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.getNoteContent();
    this.router.events.subscribe(e => {if(e instanceof NavigationEnd){
      this.getNoteContent();
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
    this.NoteManagerService.saveNote(name, this.content)
  }

  clearField(){
    this.content='';
  }
}
