import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NoteManagerService } from '../note-manager.service';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.css']
})
export class NoteDisplayComponent implements OnInit {

  constructor(
    private NoteManagerService: NoteManagerService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  private content:string;

  ngOnInit() {
    this.getNoteContent();
    this.router.events.subscribe(e => {if(e instanceof NavigationStart){
      this.getNoteContent();
    }
    }
  )
  }

  getNoteContent(){
    console.log("getNoteContent ran")
    const name = this.ActivatedRoute.snapshot.paramMap.get('name');
    this.content =  this.NoteManagerService.getNoteContent(name);
  }
}
