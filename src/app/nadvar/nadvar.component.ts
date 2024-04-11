import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
  styleUrls: ['./nadvar.component.css']
})
export class NadvarComponent implements OnInit {
  logo= "assets/Images/Logo.png"
  lang:string ='';

  constructor(private translateService:TranslateService){

  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';

  }
  ChangeLang(lang:any){
    const selectedLanguage = lang.target.value;

    localStorage.setItem('lang',selectedLanguage);
    this.translateService.use(selectedLanguage);
  }

  click(){
    Swal.fire('¡Para tener mas informacion por favor registrese!');
  }
}
