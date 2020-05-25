import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RequestForService } from 'src/app/services/request-for.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-add-request-modal',
  templateUrl: './add-request-modal.component.html'
})
export class AddRequestModalComponent implements OnInit {

  add_request_service_form: FormGroup
  public categories: Array<Category>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public router: Router,
    public requestService: RequestForService,
    private loadingService: LoadingService,
  ) { 
    this.add_request_service_form = this.formBuilder.group({
      title: '',
      category_id: '',
      expiry_date: '',
      location: '',
      budget: '',
      description: '',
      media_file: ''
    })
  }

  ngOnInit(): void {
    this.categories = this.data;
    this.add_request_service_form = this.formBuilder.group({
      title:          ['', Validators.required],
      category_id:    [''],
      expiry_date:    ['', Validators.required],
      location:       ['', Validators.required],
      budget:         ['', Validators.required],
      description:    ['', Validators.required],
      media_file:     [''],
    });
  }

  public addRequestService(): void {
    this.loadingService.show();
    let data = this.add_request_service_form.value;
    this.requestService.addRequestService(data).subscribe((res) => {
      if(res.success == true) {
        console.log(res);
        this.loadingService.hide();
        location.reload();
      }
    })
  }

}
