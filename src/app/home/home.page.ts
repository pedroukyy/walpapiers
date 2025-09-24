import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, ActionSheetController } from '@ionic/angular';
import { User } from '@firebase/auth-types';

import { AuthService } from '../core/services/auth';
import { UploaderService } from '../core/services/uploader';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  @ViewChild('fileInput') fileInput!: ElementRef;
  public wallpapers: { url: string }[] = [];
  private currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private uploader: UploaderService,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.afAuth.authState.subscribe(user => {
      this.currentUser = user;
    });
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  async handleFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file || !this.currentUser) { return; }

    const loading = await this.loadingCtrl.create({ message: 'Procesando...' });
    await loading.present();
    try {
      const publicUrl = await this.uploader.uploadFile(file, this.currentUser.uid);
      this.wallpapers.push({ url: publicUrl });
      this.presentToast('¡Imagen subida y lista para mostrar!', 'success');
    } catch (error) {
      console.error('Error en el proceso de subida:', error);
      this.presentToast('Error al subir la imagen.', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  async onWallpaperClick(wallpaper: { url: string }) {
    console.log('Se hizo clic en la imagen:', wallpaper.url);

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Establecer como Fondo de Pantalla',
          icon: 'image-outline',
          handler: () => {
            this.presentToast('¡Cambio hecho perfectamente!', 'success');
          }
        },
        {
          text: 'Establecer como Pantalla de Bloqueo',
          icon: 'lock-closed-outline',
          handler: () => {
            this.presentToast('¡Cambio hecho perfectamente!', 'success');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async handleLogout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

  async presentToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastCtrl.create({ message, duration: 3000, color });
    toast.present();
  }
}
