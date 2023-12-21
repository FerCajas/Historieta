import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../Service/usuarios.service';
import { Login } from 'src/app/Interfaces/Login';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: FormGroup;
  private _error = new Subject<string>();
  usuario: string = '';
  contraseña: string = '';
  constructor(private fb: FormBuilder,private _UsuariosService:UsuariosService ) {
this.login= this.fb.group({
  usuario:['',Validators.required],
  contraseña:['',Validators.required]
})
  }
  ngOnInit(): void {

  }
  Acceso() {

              let correo = this.login.get('usuario')?.value;
              Swal.fire(`Hola ${correo} Bienvenido`)
  }
}
