import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';
import { EstoreManagementService } from 'src/app/services/estore-management.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {

  product_form: FormGroup;
  public media_file: File;

  constructor(
    public formBuilder: FormBuilder,
    private loadingService: LoadingService,
    public estoreManagementService: EstoreManagementService
  ) { 
    this.product_form = this.formBuilder.group({
      name: '',
      shipping_days: '',
      amount: '',
      shipping_charges: '',
      description: '',
      media_file: null
    })
  }

  ngOnInit(): void {
    this.product_form = this.formBuilder.group({
      name: ['', Validators.required],
      shipping_days: ['', Validators.required],
      amount: ['', Validators.required],
      shipping_charges: ['', Validators.required],
      description: ['', Validators.required],
      media_file: [null]
    })
  }

  public addProduct(): void {
    this.loadingService.show();
    this.estoreManagementService.addProduct(this.product_form, this.media_file).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        location.reload();
      }
      this.loadingService.hide();
    })
  }

  onMediaSelected(event) {
    if(event.target.files.length > 0) {
      this.media_file = event.target.files[0];
    }
  }
}
