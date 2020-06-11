import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AnimationBuilder, style, AnimationPlayer, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingEle: any;
  private player: AnimationPlayer;
  private animation: Animation;

  constructor(
    private router: Router,
    private _animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private document: Document,
  ) {
    console.log("here loading module")
    this.initialize();
  }

  /** loading initialize */
  public initialize(): void {
    this.loadingEle = this.document.body.querySelector("#actionLoading");
    if (this.loadingEle) {
      this.initialHide();
    }
  }

  public show(): void {
    this.player =
      this._animationBuilder
        .build([
          style({
            opacity: '0',
          }),
          animate('300ms ease', style({ opacity: '1', zIndex: '100000'}))
        ]).create(this.loadingEle);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  /** hide the action loading */
  public hide(): void {
    this.player = this._animationBuilder
      .build([
        style({ opacity: '1' }),
        animate('1000ms ease', style({ opacity: '0',  zIndex: '-120000'}))
      ]).create(this.loadingEle);
    setTimeout(() => {
      this.player.play()
    }, 0);
  }

  /**initial hide */
  public initialHide(): void {
    this.player = this._animationBuilder
      .build([
        style({ opacity: '1' }),
        animate('0ms ease', style({ opacity: '0',  zIndex: '-120000'}))
      ]).create(this.loadingEle);
    setTimeout(() => {
      this.player.play()
    }, 0);
  }
}
