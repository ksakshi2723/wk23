import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CmspageModule} from './cmspage/cmspage.module'
import {BlogpostModule } from './blogpost/blogpost.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    
    CmspageModule,
    BlogpostModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
