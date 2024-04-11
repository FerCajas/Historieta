import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

audio_libro = 'assets/Sounds/Hlibro.mp3'
audio_juego = 'assets/Sounds/HJuegos.mp3'
audio_noticias = 'assets/Sounds/HNoticias.mp3'

parrafo:String = "Variedad de informacion que comparten el conocimiento en la busqueda."
parrafo2:String = "Desafio y aprendizaje potenciando su imaginacion mediante la creatividad."
parrafo3:String = "Se presentan novedades e informaciones actualizadas."
img ="assets/Images/Libro.png"
img2 ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png"
img3 ="https://img.freepik.com/vector-premium/concepto-noticias-mundiales-ilustracion-globo-vectorial-tema-periodistico-noticias-vivo_570429-18111.jpg"

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
    const data = JSON.stringify(this.nuevocomentario.value);
    localStorage.setItem('formData', data);
    Swal.fire('¡Su comentario ha sido guardado con exito!');
    localStorage.removeItem('formData');
  }

  reproducir1(){
    const audio = new Audio(this.audio_libro);
    audio.play();
  }
  reproducir2(){
    const audio = new Audio(this.audio_juego);
    audio.play();
  }
  reproducir3(){
    const audio = new Audio(this.audio_noticias);
    audio.play();
  }
}
