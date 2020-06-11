import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-block-users',
  templateUrl: './block-users.component.html'
})
export class BlockUsersComponent implements OnInit {

  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;
  public page = 1;
  public blockedUsers: Array<any>;
  public isExist: boolean = true;

  constructor(
    private loadingService: LoadingService,
    public profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.BlockedUsers();
  }

  public BlockedUsers(): void{
    this.loadingService.show();
    this.profileService.BlockedUsers().subscribe((res) => {
      if(res.success == true) {
        if(res.data.length > 0) {
          this.blockedUsers = res.data;
        } else {
          this.isExist = false;
        }
      }
      this.loadingService.hide();
    })
  }

}
