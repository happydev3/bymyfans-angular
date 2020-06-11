import { Component, OnInit, Inject } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from  'rxjs';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html'
})
export class PostModalComponent implements OnInit {

  post_form: FormGroup;
  public uploader: FileUploader = new FileUploader({});
  public media_files: Array<File>;

  constructor(
    private loadingService: LoadingService,
    public postService: PostService,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.post_form = this.formBuilder.group({
      content: '',
      estore_link: false,
      comments_open: true,
      public: false,
      for_favorites: false
    })
   }

  ngOnInit(): void {
    this.post_form = this.formBuilder.group({
      content: ['', Validators.required],
      estore_link: [false, Validators.required],
      comments_open: [true, Validators.required],
      public: [false, Validators.required],
      for_favorites: [false, Validators.required]
    })
  }

  public addPost(): void {
    this.loadingService.show();
    let postInfo = this.post_form;
    this.postService.addPost(postInfo, this.media_files).subscribe((res) => {
      if(res.success == true) {
        this.loadingService.hide();
        location.reload();
      }
    })
  }

  public editPost(): void {
    this.loadingService.show();
    let postInfo = this.post_form;
    this.postService.editPost(postInfo, this.media_files, this.data).subscribe((res) => {
      if(res.success == true) {
        this.loadingService.hide();
        location.reload();
      }
    })
  }

  onMediaSelected(event) {
    if(event.target.files.length > 0) {
      this.media_files = event.target.files;
    }
  }
}
