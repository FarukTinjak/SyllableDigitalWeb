import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BannerComponent} from './banner/banner.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {MobileComponent} from './mobile/mobile.component';
import {ClientsComponent} from './clients/clients.component';
import {BlogComponent} from './blog/blog.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {NgxPageScrollModule} from "ngx-page-scroll";
import { PostComponent } from './post/post.component';
import axios from "axios";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: '', component: HomeComponent, pathMatch:"full"},
  {path: 'blog/post/:id/:slug', component:PostComponent}
];

const backend_base = 'http://syllable-backend.local';
axios.defaults.baseURL = backend_base + '/api';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    BannerComponent, ContactComponent, FooterComponent, MobileComponent, ClientsComponent, HomeComponent, PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),
    NgxPageScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent],

  exports:
    [RouterModule]
})
export class AppModule {
}
