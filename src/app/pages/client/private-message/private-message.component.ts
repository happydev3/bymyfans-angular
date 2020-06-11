import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-message',
  templateUrl: './private-message.component.html'
})
export class PrivateMessageComponent implements OnInit {

  private_message: FormGroup;
  public showEmojiPicker = false;
  public message: string;
  public isSales: boolean = true;

  constructor(
    public formBuilder: FormBuilder,
    public loadingService: LoadingService
  ) {
    this.private_message = this.formBuilder.group({
      text : ''
    })
   }

  ngOnInit(): void {
    this.private_message = this.formBuilder.group({
      text : ['']
    })
  }

  toggleEmojiPicker() {
    console.log('click');
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    const { message } = this;
    const text = `${message}${event.emoji.native}`;
    console.log(text);
    this.message = text;
    this.showEmojiPicker = false;
  }
}
