import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ContactsFilterPipe } from './components/list-contacts/contacts-filter.pipe';

import { AddNewContactService } from './services/add-new-contact.service';
import { ContactsService } from './components/list-contacts/contacts.service';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AddNewContactComponent } from './components/add-new-contact/add-new-contact.component';
import { PageDescriptionComponent } from './components/page-description/page-description.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewContactComponent,
    PageDescriptionComponent,
    NavBarComponent,
    HeaderComponent,
    ListContactsComponent,
    ContactsFilterPipe,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [ AddNewContactService, ContactsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
