import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html'
})
export class CreateGroupComponent implements OnInit {

  create_group_form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    private loadingService: LoadingService,
    public favoriteService: FavoritesService,
  ) { 
    this.create_group_form = this.formBuilder.group({
      category: ''
    })
  }

  ngOnInit(): void {
    this.create_group_form = this.formBuilder.group({
      category: ['', Validators.required]
    })
  }

  public createGroup(): void {
    this.favoriteService.createGroup(this.create_group_form).subscribe((res) => {
      if(res.success == true) {
        location.reload();
      }
    })
  }

}
