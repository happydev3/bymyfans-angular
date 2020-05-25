import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-estore-management',
  templateUrl: './estore-management.component.html'
})
export class EstoreManagementComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

}
