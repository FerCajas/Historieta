import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login: FormGroup;
  usuario: string = '';
  contraseña: string = '';
  constructor(private fb: FormBuilder) {
this.login= this.fb.group({
  usuario:['',Validators.required],
  contraseña:['',Validators.required]
})
  }
  ngOnInit(): void {

  }
  Acceso(){
    let correo = this.login.get('usuario')?.value;
    alert(`Hola ${correo} Bienvenido`)
  }
}
