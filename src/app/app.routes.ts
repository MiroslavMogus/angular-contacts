import { Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ListContactsComponent } from 'app/components/list-contacts/list-contacts.component';
import { PageDescriptionComponent } from 'app/components/page-description/page-description.component';
import { AddNewContactComponent } from 'app/components/add-new-contact/add-new-contact.component';
import { EditContactComponent } from 'app/components/edit-contact/edit-contact.component';

export const routes: Routes = [
  { path: '', component: PageDescriptionComponent },
  { path: 'list-contacts', component: ListContactsComponent },
  { path: 'add-new-contact', component: AddNewContactComponent },
  { path: 'edit-contact/:id', component: EditContactComponent }
];