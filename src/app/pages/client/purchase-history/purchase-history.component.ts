import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html'
})
export class PurchaseHistoryComponent implements OnInit {

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
  }

}
