import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterDetails } from '../models/register-details';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';

@Component({
  selector: 'app-registration-form',
  // standalone: true,
  // imports: [],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        admittedDate: ['', Validators.required],
        leftoutDate: ['', Validators.required],
        studentName: ['', Validators.required],
        studentEmail: ['', [Validators.required, Validators.email]],
        rollNumber: ['', Validators.required],
      });
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        let registration = this.registrationService.getRegistration(id);

        if (id) {
          let registration = this.registrationService.getRegistration(id);

          if (registration) this. registerForm.patchValue(registration);
        }
      }
    }
  onSubmit(){
      if (this.registerForm.valid) {
        let registration: RegisterDetails = this.registerForm.value;

        let id = this.activatedRoute.snapshot.paramMap.get('id');

        if (id) {
          this.registrationService.updateRegistration(id, registration);
        } else {
            this.registrationService.addRegistration(registration);
        }

        this.router.navigate(['/list']);
      }
    }
}
