import { Component, OnInit } from '@angular/core';
import { BloodDonationService } from './service/blood-donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  bloodDonationServiceData: any;
  constructor(
    private bloodDonation: BloodDonationService,
    private router: Router
  ) {
    this.bloodDonationServiceData = bloodDonation;
  }
  ngOnInit() {
    this.bloodDonationServiceData.loginBydeafault();
    if (!this.bloodDonationServiceData.isLogin) {
      this.router.navigate(['/']);
    }
  }
  title = 'RedDrop';
}
