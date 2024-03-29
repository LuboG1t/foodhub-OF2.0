import { Component } from '@angular/core';
import {CreadorService} from "../../services/integration/creador.service";

@Component({
  selector: 'app-body-creador-mi-perfil',
  templateUrl: './body-creador-mi-perfil.component.html',
  styleUrls: ['./body-creador-mi-perfil.component.css']
})
export class BodyCreadorMiPerfilComponent {

  public profileImage: string | ArrayBuffer | null = './assets/images/default-profile-image.jpg';

  constructor(private creadorService: CreadorService) {
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profileImage = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }

  openFileInput(): void {
    document.getElementById('fileInput')?.click();
  }

}
