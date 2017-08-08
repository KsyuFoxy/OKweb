import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutIconsComponent } from './about/about-icons.component';
import { SliderComponent } from './about/slider.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LogoComponent } from './logo/logo.component';
import { FDTextComponent } from './fd-text/fd-text.component';

import { BlurTextDirective } from './blur-text';
import { ClickOutside } from './click-directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlurTextDirective,
    ClickOutside,
    HomeComponent,
    AboutComponent,
    AboutIconsComponent,
    SliderComponent,
    ContactsComponent,
    LogoComponent,
    FDTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
                          { path: '', component: HomeComponent },
                          { path: 'about', component: AboutComponent },
                          { path: 'contacts', component: ContactsComponent },
                        ]
                    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBli1C5mpTtEIVsD_Z7UwPl68yoriKakgw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
