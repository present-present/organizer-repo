import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate } from '@organizer-repo/shared-interfaces';

@Component({
  selector: 'organizer-repo-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() authenticateEventEmitter = new EventEmitter<Authenticate>();

  login(authenticate: Authenticate) {
    this.authenticateEventEmitter.emit(authenticate);
  }
}
