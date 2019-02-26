import uuid from 'uuid/v4';
import { Component, OnInit } from '@angular/core';

import { OAuthService } from '../../../services/oauth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  username: string;
  password: string;
  provider = 'local';
  token = uuid();

  constructor(private signinService: OAuthService) { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.token = this.token;
    e.provider = this.provider;
    console.log(this.username);
    console.log(this.password);
    console.log(e);
    this.signinService.signin(e);
  }
}
