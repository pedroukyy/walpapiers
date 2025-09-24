import { Injectable } from '@angular/core'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Wallpaper {
  url: string;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private firestore: AngularFirestore) { }

  addWallpaper(userId: string, url: string) {
    const wallpaperData: Wallpaper = { url, createdAt: Date.now() };
    return this.firestore.collection(`users/${userId}/wallpapers`).add(wallpaperData);
  }

  getWallpapers(userId: string): Observable<Wallpaper[]> {
    return this.firestore
      .collection<Wallpaper>(`users/${userId}/wallpapers`, ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges();
  }
}
