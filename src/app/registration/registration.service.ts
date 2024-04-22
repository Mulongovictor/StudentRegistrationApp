import { Injectable } from '@angular/core';
import { RegisterDetails } from '../models/register-details';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private registerDetails: RegisterDetails[] = [];

  constructor() {
    let savedRegistrations = localStorage.getItem('registrations');
    this.registerDetails = savedRegistrations
      ? JSON.parse(savedRegistrations)
      : [];
  }
  getRegistrations(): RegisterDetails[] {
    return this.registerDetails;
  }

  getRegistration(id: string): RegisterDetails | undefined {
    return this.registerDetails.find((res) => res.id === id);
  }

  addRegistration(reservation: RegisterDetails): void {
    reservation.id = Date.now().toString();

    this.registerDetails.push(reservation);
    localStorage.setItem('registrations', JSON.stringify(this.registerDetails));
  }

  deleteRegistration(id: string): void {
    let index = this.registerDetails.findIndex((res) => res.id === id);
    this.registerDetails.splice(index, 1);
    localStorage.setItem('registrations', JSON.stringify(this.registerDetails));
  }

  updateRegistration(id: string, updatedReservation: RegisterDetails): void {
    let index = this.registerDetails.findIndex((res) => res.id === id);
    this.registerDetails[index] = updatedReservation;
    localStorage.setItem('registrations', JSON.stringify(this.registerDetails));
  }
}