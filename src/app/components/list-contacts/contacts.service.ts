import { Injectable } from '@angular/core';
import { IContact } from './contacts';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {
    
		  
    private _eventUrl = 'assets/contacts.json';
    
    constructor(private _http: Http) { }
    
    getContacts(): Observable<IContact[]> {
		return this._http.get(this._eventUrl)
			.map((response: Response) => <IContact[]>response.json())
			.do(data => console.log("All: " + JSON.stringify(data)))
			.catch(this.handleError);
	}
	
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}