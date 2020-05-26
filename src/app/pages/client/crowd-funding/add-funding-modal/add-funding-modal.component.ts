import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RequestForService } from 'src/app/services/request-for.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CrowdFundingService } from 'src/app/services/crowd-funding.service';

@Component({
  selector: 'app-add-funding-modal',
  templateUrl: './add-funding-modal.component.html'
})
export class AddFundingModalComponent implements OnInit {

  add_crowd_fund_form: FormGroup;
  public categories: Array<Category>;
  public media_file: File;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public router: Router,
    private loadingService: LoadingService,
    public crowdFundService: CrowdFundingService
  ) { 
    this.add_crowd_fund_form = this.formBuilder.group({
      title: '',
      category_id: '',
      expiry_date: '',
      location: '',
      budget: '',
      description: '',
      products: ''
    })
  }

  ngOnInit(): void {
    this.categories = this.data;
    this.add_crowd_fund_form = this.formBuilder.group({
      title:          ['', Validators.required],
      category_id:    [''],
      expiry_date:    ['', Validators.required],
      location:       ['', Validators.required],
      budget:         ['', Validators.required],
      description:    ['', Validators.required],
      products:       ['', Validators.required]
    });
  }

  public addCrowdFund(): void {
    this.loadingService.show();
    let data = this.add_crowd_fund_form;
    this.crowdFundService.addCrowdFund(data, this.media_file).subscribe((res) => {
      if(res.success == true) {
        console.log(res);
        this.loadingService.hide();
        location.reload();
      }
    })
  }

  onMediaSelected(event) {
    if(event.target.files.length > 0) {
      this.media_file = event.target.files[0];
    }
  }
}
