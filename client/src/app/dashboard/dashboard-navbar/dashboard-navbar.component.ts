import { Component } from '@angular/core';
import { BloodDonationService } from 'src/app/service/blood-donation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css'],
})
export class DashboardNavbarComponent {
  bloodDonationServiceData: any;
  constructor(
    private bloodDonationService: BloodDonationService,
    private router: Router
  ) {
    this.bloodDonationServiceData = bloodDonationService;
  }

  logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    this.bloodDonationService.refreshUserData();
    this.bloodDonationServiceData.isLogin = false;
    this.router.navigateByUrl('/');
  }
}
