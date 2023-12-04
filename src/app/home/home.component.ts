import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  nuevocomentario: FormGroup;
  constructor(private fb: FormBuilder) {
this.nuevocomentario= this.fb.group({
  usuario:['',Validators.required],
  correo:['',Validators.required],
  fecha:['',Validators.required],
  comentario:['',Validators.required]
})
  }
  ngOnInit(): void {

  }
  guardarcomentario(){
    console.log(this.nuevocomentario)
  }
}
