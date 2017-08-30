import { Component, Inject } from '@angular/core';
import { APP_STORE } from '../store/app-store';
import { ApplicationState } from '../store/application-state';
import { voteYesAction, voteNoAction } from '../store/votes/vote-actions';
import { Store } from 'redux';

@Component({
  selector: 'trm-voter',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-between center" fxFlex style="padding-left:10px;">
      <button (click)="increment()" md-fab class="yes" mdTooltip="Vote Yes!">
        <md-icon class="md-24">thumb_up</md-icon>
      </button>

      <ng-content></ng-content>

      <button (click)="decrement()" md-fab class="no" mdTooltip="Vote No!">
        <md-icon class="md-24">thumb_down</md-icon>
      </button>
    </div>
  `,
  styles : [
    `button.yes { background-color: darkgreen; }`,
    `button.no { background-color: red; }`
  ]
})
export class VoterComponent {

  /**
   * Inject the appstore
   */
  constructor(@Inject(APP_STORE) private store: Store<ApplicationState>) { }

  private increment() {
    this.store.dispatch(voteYesAction());
  }

  private decrement() {
    this.store.dispatch(voteNoAction());
  }
}

