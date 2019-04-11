import { TestBed } from '@angular/core/testing';

import { PublicacionesService } from './publicaciones.service';

describe('PublicacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicacionesService = TestBed.get(PublicacionesService);
    expect(service).toBeTruthy();
  });
});
