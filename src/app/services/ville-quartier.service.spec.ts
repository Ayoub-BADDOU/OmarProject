import { TestBed } from '@angular/core/testing';

import { VilleQuartierService } from './ville-quartier.service';

describe('VilleQuartierService', () => {
  let service: VilleQuartierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VilleQuartierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
