import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../Service/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro: FormGroup;
  public listausuarios : any = []
  searchResults: any[] = [];
  constructor(private fb: FormBuilder, private UsuariosService:UsuariosService) {
this.registro= this.fb.group({
  usuario:['',Validators.required],
  correo:['',Validators.required],
  contraseña:['',Validators.required]
})
  }
  ngOnInit(): void {

  }
  guardar() {
    const datos = this.registro.value;
    this.UsuariosService.guardarDatos(datos).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }

}
