import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';
import { TipModalComponent } from 'src/app/shared/tip-modal/tip-modal.component';
import { FavoritesService } from 'src/app/services/favorites.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorite-element',
  templateUrl: './favorite-element.component.html'
})
export class FavoriteElementComponent implements OnInit {

  @Input() favorite: any;
  add_group_form: FormGroup
  public userPhotoUrl: String;
  public userWallUrl: String;
  public myCategories: Array<any>;

  constructor(
    public dialog: MatDialog,
    public formBuilder: FormBuilder,
    public favoriteService: FavoritesService
  ) {
    this.add_group_form = this.formBuilder.group({
      user_id: '',
      category_id: ''
    })
   }

  ngOnInit(): void {
    this.add_group_form = this.formBuilder.group({
      user_id: ['', Validators.required],
      category_id: ['', Validators.required]
    })
    this.userPhotoUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-pic/' + this.favorite.get_user.profile_pic;
    this.userWallUrl = 'https://bvmwebsolutions.com/bemyfans/public/uploads/profile-wall-pic/' + this.favorite.get_user.wall_pic;
    this.getMyCategories();
  }

  public getMyCategories(): void {
    this.favoriteService.getMyCategories().subscribe((res) => {
      if(res.success == true) {
        this.myCategories = res.data;
      }
    })
  }

  public AddUserGroup(): void {
    this.favoriteService.AddUserGroup(this.add_group_form).subscribe((res) => {
      if(res.success == true) {
        location.reload();
      }
    })
  }

  openCallModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    const dialogRef = this.dialog.open(CallModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

  openTipModal() {
    let config = new MatDialogConfig();
    config.panelClass = 'request-modal';
    config.disableClose = false;
    config.autoFocus = true;
    config.data = this.favorite.get_user;
    const dialogRef = this.dialog.open(TipModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}
