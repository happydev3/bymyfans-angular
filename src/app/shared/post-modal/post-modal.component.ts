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
      media: null
    })
   }

  ngOnInit(): void {
    this.post_form = this.formBuilder.group({
      content: ['', Validators.required],
      estore_link: [false, Validators.required],
      comments_open: [false, Validators.required],
      public: [false, Validators.required],
      media: [null],
    })
  }

  public addPost(): void {
    this.loadingService.show();
    this.postService.addPost(this.post_form.value).subscribe((res) => {
      console.log(res);
      if(res.success == true) {
        location.reload();
        this.loadingService.hide();
      }
    })
  }

}
