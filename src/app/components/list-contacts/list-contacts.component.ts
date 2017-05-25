import { Component, OnInit } from '@angular/core';
import { IContact } from './contacts';
import { ContactsService }  from './contacts.service';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})

export class ListContactsComponent implements OnInit {
		searchCriteria: string = '';
		pageTitle: string = "Kontakti";
  	contacts: IContact[];

        constructor(private _contactsService: ContactsService) {
   		 	} 

        ngOnInit(): void {
        			this._contactsService.getContacts()
			.subscribe(contacts => this.contacts = contacts,
			);
        }
}
