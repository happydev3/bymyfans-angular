import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/services/loading.service';
import { EstoreManagementService } from 'src/app/services/estore-management.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    public estoreManagementService: EstoreManagementService,
    @Inject(MAT_DIALOG_DATA) public data: any
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
    console.log(this.data);
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
      if(res.success == true) {
        location.reload();
      }
      this.loadingService.hide();
    })
  }

  public editProduct(): void {
    this.loadingService.show();
    this.estoreManagementService.editProduct(this.product_form, this.media_file, this.data).subscribe((res) => {
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
