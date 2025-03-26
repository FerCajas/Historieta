import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NadvarComponent } from './nadvar/nadvar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import {RouterModule, Routes} from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import { HttpClient,HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BooksComponent } from './home/books/books.component';
import { PlaysComponent } from './home/plays/plays.component';
import { NewsComponent } from './home/news/news.component';
import { ChatbotComponent } from './page/chatbot/chatbot.component';
import { MultimediaComponent } from './multimedia/multimedia.component';



export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    FooterComponent,
    HomeComponent,
    HistoriaComponent,
    CarrouselComponent,
    HelpComponent,
    NotFoundComponent,
    LoginComponent,
    RegistroComponent,
    BooksComponent,
    PlaysComponent,
    NewsComponent,
    ChatbotComponent,
    MultimediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
