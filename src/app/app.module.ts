import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AddNewContactService } from './services/add-new-contact.service';

import { AppComponent } from './app.component';
import { AddNewContactComponent } from './components/add-new-contact/add-new-contact.component';
import { PageDescriptionComponent } from './components/page-description/page-description.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewContactComponent,
    PageDescriptionComponent,
    NavBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ AddNewContactService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
