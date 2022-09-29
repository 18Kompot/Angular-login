import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userSerive: UserService, private route: Router) {}
  password: string = '';
  email: string = '';

  ngOnInit(): void {
    if (this.userSerive.isLoggedIn()) {
      this.route.navigate(['/dashboard']);
    }
  }

  login() {
    this.userSerive.login(this.email, this.password);
  }
}
