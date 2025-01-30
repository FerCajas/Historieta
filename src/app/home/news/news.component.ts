import { Component, OnInit } from '@angular/core';
import { ArchivosService } from 'src/app/Service/archivos.service';
import{archivos} from '../../Interfaces/Archivos'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  fileToUpload: File | null = null;
  fileUrl: string | null = null;
  listararchivos : archivos[]=[]

  constructor(private ArchivosService: ArchivosService) { }

  ngOnInit(): void {
    this.mostrardata();
  }



  public mostrardata() {
    this.ArchivosService.Get_Api().subscribe(datos=>{
      console.log(datos);
      this.listararchivos=datos
    }

  )
  }
  handleFileInput(event: Event) {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    if (fileList != null && fileList.length > 0) {
      const file: File = fileList[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileUrl = reader.result as string;
      };
    }
  }

}
