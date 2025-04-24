import { Component, OnInit } from '@angular/core';
import { ArchivosService } from 'src/app/Service/archivos.service';
import { archivos } from '../../Interfaces/Archivos';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  fileToUpload: File | null = null;
  fileUrl: string | null = null;
  listararchivos: archivos[] = [];

  constructor(private archivosService: ArchivosService) {}

  ngOnInit(): void {
    this.mostrarData();
  }


  mostrarData(): void {
    this.archivosService.Get_Api().subscribe({
      next: (datos) => {
        console.log('Archivos cargados:', datos);
        this.listararchivos = datos;
      },
      error: (error) => {
        console.error('Error al obtener archivos:', error);
      }
    });
  }


  handleFileInput(event: Event): void {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      this.fileToUpload = fileList[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.fileUrl = reader.result as string;
      };
      reader.readAsDataURL(this.fileToUpload);
    }
  }


  convertirArchivo(): void {
    if (!this.fileToUpload) {
      alert('Primero selecciona un archivo para convertir.');
      return;
    }

    const originalName = this.fileToUpload.name;
    const convertedName = originalName.replace(/\.\w+$/, '.pdf');

    alert(`Simulación: "${originalName}" ha sido convertido a "${convertedName}"`);
  }


  compartirArchivo(): void {
    if (!this.fileUrl) {
      alert('Primero selecciona un archivo para compartir.');
      return;
    }

    navigator.clipboard.writeText(this.fileUrl).then(() => {
      alert('Enlace del archivo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  }



}



