import { Injectable } from '@angular/core'; 
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.key);
  }

  async uploadFile(file: File, userId: string): Promise<string> {
    const fileName = `${userId}/${Date.now()}_${file.name}`;

    const { data, error } = await this.supabase.storage
      .from('wallpapa')
      .upload(fileName, file);

    if (error) {
      console.error('Error al subir el archivo:', error);
      throw error;
    }

    const { data: { publicUrl } } = this.supabase.storage
      .from('wallpapa')
      .getPublicUrl(fileName);

    return publicUrl;
  }
}
