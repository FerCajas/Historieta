import { Component, OnInit } from '@angular/core';
import { ArchivosService } from 'src/app/Service/archivos.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  fileToUpload: File | null = null;
  fileUrl: string | null = null;
  listarchivo: any[] = [];

  constructor(private ArchivosService: ArchivosService) { }

  ngOnInit(): void {
    this.llenardata();
  }

  llenardata() {
    this.ArchivosService.Get_Api().subscribe((data: any) => {
      console.log(data);
      var resp: any = data;
      if (resp.data != null) {
        this.listarchivo = resp.data.map((archivo: any) => ({
          name: archivo.name,
          content: archivo.content,
          date: archivo.date,
        }));
      }
    });
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
