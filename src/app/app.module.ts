import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { BlurTextDirective } from './blur-text';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactsComponent } from './contacts.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlurTextDirective,
    HomeComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
        this.appRoutes = [
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'contacts', component: ContactsComponent },
        ]
        )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
