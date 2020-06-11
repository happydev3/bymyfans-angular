import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html'
})
export class CustomerSupportComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

}
