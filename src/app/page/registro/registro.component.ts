import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro: FormGroup;
  constructor(private fb: FormBuilder) {
this.registro= this.fb.group({
  usuario:['',Validators.required],
  correo:['',Validators.required],
  contraseña:['',Validators.required]
})
  }
  ngOnInit(): void {

  }
  Registro(){
    console.log(this.registro)
  }
}
