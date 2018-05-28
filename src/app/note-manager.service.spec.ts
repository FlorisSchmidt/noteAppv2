import { TestBed, inject } from '@angular/core/testing';

import { NoteManagerService } from './note-manager.service';

describe('NoteManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteManagerService]
    });
  });

  it('should be created', inject([NoteManagerService], (service: NoteManagerService) => {
    expect(service).toBeTruthy();
  }));
});
