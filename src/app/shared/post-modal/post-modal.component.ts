import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html'
})
export class PostModalComponent implements OnInit {

  post_form: FormGroup;
  public media_files: Array<File>;

  constructor(
    private loadingService: LoadingService,
    public postService: PostService,
    public formBuilder: FormBuilder
  ) {
    this.post_form = this.formBuilder.group({
      content: '',
      estore_link: false,
      comments_open: false,
      public: false,
    })
   }

  ngOnInit(): void {
    this.post_form = this.formBuilder.group({
      content: ['', Validators.required],
      estore_link: [false, Validators.required],
      comments_open: [false, Validators.required],
      public: [false, Validators.required],
    })
  }

  public addPost(): void {
    this.loadingService.show();
    console.log(this.post_form, this.media_files);
    let postInfo = this.post_form;
    this.postService.addPost(postInfo, this.media_files).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        location.reload();
        this.loadingService.hide();
      }
    })
  }

  onMediaSelected(event) {
    if(event.target.files.length > 0) {
      this.media_files = event.target.files;
      console.log(this.media_files);
    }
  }
}
