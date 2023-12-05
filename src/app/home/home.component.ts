import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
parrafo:String = "Some quick example text to build on the card title and make up the bulk of the card's content."
img ="assets/Images/Libro.png"
img2 ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
img3 ="assets/Images/Pago.jpg"

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
