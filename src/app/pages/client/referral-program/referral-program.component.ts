import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ReferralProgramService } from 'src/app/services/referral-program.service';

@Component({
  selector: 'app-referral-program',
  templateUrl: './referral-program.component.html'
})
export class ReferralProgramComponent implements OnInit {

  public referral_url: string;
  public qr_image_url: string;

  constructor(
    private loadingService: LoadingService,
    public referralService: ReferralProgramService
  ) { }

  ngOnInit(): void {
    this.referral_page();
  }

  public referral_page(): void {
    this.referralService.referral_page().subscribe(
      (res) => {
        if(res.success ==  true) {
          this.referral_url = res.data.referral_url;
          this.qr_image_url = res.data.qr_image_url;
        }
      }
    )
  }
}
