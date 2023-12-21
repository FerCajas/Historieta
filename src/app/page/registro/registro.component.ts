import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../Service/usuarios.service';
import { Usuarios } from 'src/app/Interfaces/Usuarios';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro: FormGroup;
  public listausuarios : any = []
  searchResults: any[] = [];
  constructor(private fb: FormBuilder, private _UsuariosService:UsuariosService) {
this.registro= this.fb.group({
  usuario:['',Validators.required],
  correo:['',Validators.required],
  contraseña:['',Validators.required]
})
  }
  ngOnInit(): void {

  }
  guardar() {
    const usuarios:Usuarios={
       User: this.registro.get('usuario')?.value,
       email: this.registro.get('correo')?.value,
       password: this.registro.get('contraseña')?.value,
    }
    this._UsuariosService.guardarUsuarios(usuarios).subscribe(data=>{
          console.log(data)
          Swal.fire('¡Felicidades por registrarte ahora eres un miembro mas!');
          this.registro.reset();
    })
  }

}
