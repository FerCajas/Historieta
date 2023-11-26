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

const routes : Routes = [
{
  path: 'Home',
  component:HomeComponent
},
{
  path: 'Historia',
  component:HistoriaComponent
},
{
  path: 'Ayuda',
  component:HelpComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    FooterComponent,
    HomeComponent,
    HistoriaComponent,
    CarrouselComponent,
    HelpComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }