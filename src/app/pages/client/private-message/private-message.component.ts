import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-private-message',
  templateUrl: './private-message.component.html'
})
export class PrivateMessageComponent implements OnInit {

  constructor(
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
  }

}
