import { Component, OnInit } from '@angular/core';
import { RegistrationModule } from '../registration/registration.module';
import { RegistrationService } from '../registration/registration.service';
import { RegisterDetails } from '../models/register-details';

@Component({
  selector: 'app-registration-list',
  // standalone: true,
  // imports: [],
  templateUrl: './registration-list.component.html',
  styleUrl: './registration-list.component.css'
})
export class RegistrationListComponent implements OnInit{

  registration: RegisterDetails[] = [];

  constructor(
    private registrationService: RegistrationService){}
  
  ngOnInit(): void {
      this.registration = this.registrationService.getRegistrations();
  }

  deleteRegistration(id: string){
    this.registrationService.deleteRegistration(id);
  }
}
