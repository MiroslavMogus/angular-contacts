import { TestBed, inject } from '@angular/core/testing';

import { AddNewContactService } from './add-new-contact.service';

describe('AddNewContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNewContactService]
    });
  });

  it('should ...', inject([AddNewContactService], (service: AddNewContactService) => {
    expect(service).toBeTruthy();
  }));
});
