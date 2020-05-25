import {Component, Input, OnDestroy, Inject, ViewEncapsulation} from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
import {DOCUMENT} from '@angular/common';
@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
    public showLoadingIndicator = true;
    @Input() public backgroundColor = 'rgba(255, 255, 255, 0.8)';
    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.showLoadingIndicator = true;
            } else if ( event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.showLoadingIndicator = false;
            }
        }, () => {
            this.showLoadingIndicator = false;
        });
    }

    ngOnDestroy(): void {
        this.showLoadingIndicator = false;
    }
}
