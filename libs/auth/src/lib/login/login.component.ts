import { Component, OnInit } from '@angular/core';
import { Authenticate } from '@organizer-repo/shared-interfaces';

@Component({
  selector: 'organizer-repo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  login(authenticate: Authenticate) {
    console.log(authenticate);
  }
}
