import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {
    this._userService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  ngOnInit(): void {
    if (!this.isLoggedIn) {
      this._router.navigate(['/login']);
    }
  }
}
