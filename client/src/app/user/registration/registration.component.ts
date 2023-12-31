import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodDonationService } from 'src/app/service/blood-donation.service';
import { HttpCallsService } from 'src/app/service/http-calls.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  bloodDonationServiceData: any;
  HttpCalls: any;
  constructor(
    private bloodDonationService: BloodDonationService,
    private router: Router,
    private httpCallsService: HttpCallsService
  ) {
    this.bloodDonationServiceData = bloodDonationService;
    this.HttpCalls = httpCallsService;
  }
  registerForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z ]+$'),
      Validators.maxLength(30),
      Validators.minLength(2),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),

    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[6-9]\\d{9}$'),
    ]),
    password: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
  });
  onlyAlphabet(event: any) {
    if (
      (event.charCode >= 65 && event.charCode <= 90) || // Capital letters (A-Z)
      (event.charCode >= 97 && event.charCode <= 122) || (event.charCode===32)
    ) {
      // Small letters (a-z)
      return true;
    }
    return false;
  }
  onlyNumber(event: any) {
    if (event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)) {
      return false;
    }
    return true;
  }
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get state() {
    return this.registerForm.get('state');
  }
  onSubmit(event: Event) {
    event.preventDefault();

    if (this.registerForm.valid) {
      this.HttpCalls.postApi('user/create', this.registerForm.value).subscribe(
        (response: any) => {
          console.log('RESPONSE ==>', response);

          if (response.status) {
            console.log(response);
            // this.bloodDonationServiceData.saveUserData(response.data);
            this.bloodDonationServiceData.showAlert(
              'success',
              `success :${response.msg}`
            );
            this.router.navigate(['/user/login']);
          } else {
            console.log('...>>>', response);
            this.bloodDonationServiceData.showAlert(
              'error',
              `error :${response.msg}`
            );
          }
        },
        (error: any) => {
          console.log('===>', error);
          this.bloodDonationServiceData.showAlert(
            'error',
            `${error.error.msg}`
          );
        }
      );
    } else {
      this.bloodDonationServiceData.showAlert('Error', 'Invalid form');
    }
  }
}
