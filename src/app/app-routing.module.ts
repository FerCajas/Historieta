import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './home/books/books.component';
import { PlaysComponent } from './home/plays/plays.component';
import { NewsComponent } from './home/news/news.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { ChatbotComponent } from './page/chatbot/chatbot.component';
import { MultimediaComponent } from './multimedia/multimedia.component';

const routes : Routes = [
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component:HomeComponent
  },
  {
    path: 'Historia',
    component:HistoriaComponent
  },
  {
    path: 'Informacion',
    component:HelpComponent
  },
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path: 'Singup',
    component:RegistroComponent
  },
  {
    path: 'Home/Libros',
    component:BooksComponent
  },
  {
    path: 'Home/Juegos',
    component:PlaysComponent
  },
  {
    path: 'Home/Noticias',
    component:NewsComponent
  },
  {
    path: 'Chatbot',
    component: ChatbotComponent
  },
  {
    path: 'Multimedia',
    component: MultimediaComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
