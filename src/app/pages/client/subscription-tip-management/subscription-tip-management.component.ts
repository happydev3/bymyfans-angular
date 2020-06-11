import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-subscription-tip-management',
  templateUrl: './subscription-tip-management.component.html'
})
export class SubscriptionTipManagementComponent implements OnInit {

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
  }

}
