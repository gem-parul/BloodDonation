import { Component, OnInit } from '@angular/core';
import { BloodDonationService } from 'src/app/service/blood-donation.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpCallsService } from 'src/app/service/http-calls.service';

@Component({
  selector: 'app-view-donation',
  templateUrl: './view-donation.component.html',
  styleUrls: ['./view-donation.component.css'],
})
export class ViewDonationComponent implements OnInit {
  HttpCalls: any;
  bloodDonationServiceData: any;
  constructor(
    private router: Router,
    private bloodDonation: BloodDonationService,
    private http: HttpClient,
    private httpCallsService: HttpCallsService
  ) {
    this.bloodDonationServiceData = bloodDonation;
    this.HttpCalls = httpCallsService;
  }
  ngOnInit(): void {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.bloodDonationServiceData.jwtToken}`
    );

    // this.http
    //   .get('http://localhost:5000/donation/filter', { headers })

    const params = new HttpParams();
    this.HttpCalls.getApi('donation/filter', params).subscribe(
      (response: any) => {
        if (response) {
          if (response.status) {
            this.bloodDonationServiceData.donationArray = response.data;
          } else {
            this.bloodDonationServiceData.showAlert('error', response.msg);
          }
        } else {
          this.bloodDonationServiceData.showAlert(
            'error',
            'internal server error'
          );
        }
      },
      (error: any) => {
        console.log(error);
        this.bloodDonationServiceData.showAlert('error', 'An error occurred.');
      }
    );
  }
  addDonation(donation: any) {
    this.router.navigate(['details', donation._id]);
  }
}
