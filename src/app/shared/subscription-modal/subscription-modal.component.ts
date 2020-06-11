import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-modal',
  templateUrl: './subscription-modal.component.html'
})
export class SubscriptionModalComponent implements OnInit {

  subscrpition_form: FormGroup;
  public plans: Array<any> = [
    { name: '3 Months', value: 3 },
    { name: '6 Months', value: 6 },
    { name: '9 Months', value: 9 },
    { name: '12 Months', value: 12 }
  ]

  constructor(
    public formBuilder: FormBuilder,
    public profileService: ProfileService
  ) { 
    this.subscrpition_form = this.formBuilder.group({
      amount: null,
      validity: null
    })
  }

  ngOnInit(): void {
    this.subscrpition_form = this.formBuilder.group({
      amount: [null, Validators.required],
      validity: [null, Validators.required]
    })
  }

  public createPlan(): void {
    this.profileService.createPlan(this.subscrpition_form).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        location.reload();
      }
    })
  }
}
