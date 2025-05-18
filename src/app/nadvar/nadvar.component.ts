import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nadvar',
  templateUrl: './nadvar.component.html',
  styleUrls: ['./nadvar.component.css']
})
export class NadvarComponent implements OnInit {
  query: string = '';
  logo= "assets/Images/LogoFanwebs.png"
  lang:string ='';

  constructor(private router: Router, private translateService:TranslateService){

  }

  buscar(event: Event) {
    event.preventDefault();
    if (this.query) {
      this.router.navigate(['/busqueda'], { queryParams: { q: this.query } });
    }
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
