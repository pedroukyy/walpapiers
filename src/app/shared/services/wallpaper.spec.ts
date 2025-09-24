import { TestBed } from '@angular/core/testing';

import { WallpaperService } from './wallpaper';

describe('Wallpaper', () => {
  let service: WallpaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallpaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
