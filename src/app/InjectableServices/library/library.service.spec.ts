import { TestBed } from '@angular/core/testing';
import { LibraryService } from './library.service';

describe('LibraryService', () => {
  let service: LibraryService;

  beforeEach(() => {
    service = new LibraryService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
