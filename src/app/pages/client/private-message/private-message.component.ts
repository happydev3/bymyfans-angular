import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-private-message',
  templateUrl: './private-message.component.html'
})
export class PrivateMessageComponent implements OnInit {

  public showEmojiPicker = false;
  public message: string;

  constructor(
    public loadingService: LoadingService
  ) { }

  ngOnInit(): void {
  }

  toggleEmojiPicker() {
    console.log('click');
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    const { message } = this;
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    this.showEmojiPicker = false;
  }
}
