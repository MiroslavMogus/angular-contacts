import { PipeTransform, Pipe } from '@angular/core';
import { IContact } from './contacts';


@Pipe({
	name: 'contactFilter'
})

export class ContactsFilterPipe implements PipeTransform {
    
    transform(value : IContact[], args: string[]): IContact[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
		return filter ? value.filter((contact: IContact) =>
			contact.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
    
}