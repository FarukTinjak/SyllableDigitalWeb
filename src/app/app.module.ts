import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MobileComponent } from './mobile/mobile.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    MobileComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent,HeaderComponent,BannerComponent,ContactComponent,FooterComponent,AboutComponent,MobileComponent,ClientsComponent]

})
export class AppModule { }
