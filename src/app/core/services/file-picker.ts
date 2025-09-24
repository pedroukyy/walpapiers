import { Injectable } from '@angular/core';
import { FilePicker, PickFilesResult, PickedFile } from '@capawesome/capacitor-file-picker';

@Injectable({
  providedIn: 'root'
})
export class FilePickerService {

  constructor() { }

  async pickFile(): Promise<PickedFile | null> {
    try {
      const result: PickFilesResult = await FilePicker.pickFiles({
        types: ['image/*'],
        readData: true,
      });
      if (result.files.length > 0) {
        return result.files[0];
      }
      return null;
    } catch (error) {
      console.error('Error al seleccionar el archivo:', error);
      return null;
    }
  }
}
