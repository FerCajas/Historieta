import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    const data = JSON.stringify(this.registro.value);
    const existingData = localStorage.getItem('formData');
    if (existingData) {
      const existingUser = JSON.parse(existingData).name;
      Swal.fire(`El usuario ${existingUser} ya está registrado.`);
    } else {
      const formData = JSON.parse(data);
      localStorage.setItem('formData', JSON.stringify({ ...formData, name: formData.name.trim() }));
      Swal.fire(`¡Registro guardado con éxito para el usuario ${formData.name}!`);
    }
  }
}
