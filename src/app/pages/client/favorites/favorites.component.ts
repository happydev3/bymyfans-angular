import { Component, OnInit } from '@angular/core';
import { CallModalComponent } from 'src/app/shared/call-modal/call-modal.component';
import { LoadingService } from 'src/app/services/loading.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {

  public page = 1;
  public collectionSize: number;
  public currentPage: number = 1;
  public last_Page: number;
  public Currentpage: number;

  public favorites: any;

  constructor(
    private loadingService: LoadingService,
    public favoriteService: FavoritesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFavorites(this.currentPage);
  }

  public getFavorites(currentPage): void{
    this.loadingService.show();
    this.favoriteService.getFavorites(currentPage).subscribe((res) => {
      if(res.success == true) {
        this.favorites = res.data.data;
      }
      this.loadingService.hide();
    })
  }

  pageChange(event) {
    console.log(event);
    const current = event.target.textContent;
    const page = current.replace("(current)", "");
    switch (page) {
      case '««':
        this.currentPage = 1;
        break;
      case '»»':
        this.currentPage = this.last_Page;
        break;
      case '«':
        this.currentPage = this.Currentpage - 1;
        if(this.currentPage < 1) {
          this.currentPage = 1;
        }
        break;
      case '»':
        this.currentPage = this.Currentpage + 1;
        if(this.currentPage > this.last_Page) {
          this.currentPage = this.last_Page;
        }
        break;
      default: 
        this.currentPage = page;
        break;
    }
    this.getFavorites(this.currentPage);
  }

}
