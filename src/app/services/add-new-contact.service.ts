import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../models/contact';

@Injectable()
export class AddNewContactService {

  constructor(private http:Http) { }

  	sendContact(contact:Contact)	{
  		let url = "http://localhost:8080/contact/add";

  		let headers = new Headers ({
  			'Content-Type': 'application/json',
  			'Access-Control-Allow-Origin': 'http://localhost:4200',
				'Access-Control-Allow-Methods': 'GET, POST, PUT',
				'Access-Control-Allow-Headers': 'origin, content-type, accept'
  		});

  		return this.http.post(url, JSON.stringify(contact), {headers: headers});
  	}
}
