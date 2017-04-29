import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { AddNewContactService } from '../../services/add-new-contact.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.css']
})
export class AddNewContactComponent implements OnInit {

	private newContact: Contact = new Contact();
	private contactAdded: boolean;
  
  constructor(private addNewContactService:AddNewContactService) { }

  onSubmit() {
  	this.addNewContactService.sendContact(this.newContact).subscribe(
  			res => {
  				this.contactAdded=true;
  				this.newContact = new Contact();
  			},
  			error => {
  				console.log(error);
  			}
  	);
  }

  ngOnInit() {
  }

}
