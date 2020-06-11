import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestForService } from 'src/app/services/request-for.service';

@Component({
  selector: 'app-bid-modal',
  templateUrl: './bid-modal.component.html'
})
export class BidModalComponent implements OnInit {

  bid_form: FormGroup;
  public timelines: Array<number> = [

  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public requestService: RequestForService
  ) { 
    this.bid_form = this.formBuilder.group({
      services_id: null,
      bid_amount: null,
      days: null,
      description: ''
    })
  }

  ngOnInit(): void {
    this.bid_form = this.formBuilder.group({
      services_id: [null, Validators.required],
      bid_amount: [null, Validators.required],
      days: [null, Validators.required],
      description: ['', Validators.required]
    })
  }

  public makeBid():void {
    this.requestService.makeBid(this.bid_form).subscribe((res) => {
      if(res.success == true) {
        location.reload();
      }
    })
  }
}
