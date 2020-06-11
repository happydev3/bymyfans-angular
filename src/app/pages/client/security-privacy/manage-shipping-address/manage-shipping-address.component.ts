import { Component, OnInit, Inject } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { LoadingService } from 'src/app/services/loading.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-shipping-address',
  templateUrl: './manage-shipping-address.component.html'
})
export class ManageShippingAddressComponent implements OnInit {

  shipping_form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public profileService: ProfileService,
    private loadingService: LoadingService
  ) { 
    this.shipping_form = this.formBuilder.group({
      user_id: null,
      ship_to_name: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      country: '',
      zip_code: ''
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.shipping_form = this.formBuilder.group({
      user_id: [null],
      ship_to_name: ['', Validators.required],
      address_1: ['', Validators.required],
      address_2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip_code: [null, Validators.required]
    });
  }

  public editShipping(): void {
    this.profileService.editShipping(this.shipping_form).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        location.reload();
      }
    })
  }

}
