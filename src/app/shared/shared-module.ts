
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from './components/input/input.component';
import { ToggleTranslateComponent } from './components/toggle-translate/toggle-translate.component';
import { ButtonComponent } from './components/button/button.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { CardComponent } from './components/card/card.component';
import { LinkComponent } from './components/link/link.component';

import { UserService} from './services/user';
import { WallpaperService } from './services/wallpaper';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,

  ],

  declarations: [
    InputComponent,
    ToggleTranslateComponent,
    ButtonComponent,
    FloatingButtonComponent,
    CardComponent,
    LinkComponent,

  ],

  exports: [
    InputComponent,
    ToggleTranslateComponent,
    ButtonComponent,
    FloatingButtonComponent,
    CardComponent,
    LinkComponent,

  ],

  providers: [
    UserService,
    WallpaperService
  ]
})
export class SharedModule { }
