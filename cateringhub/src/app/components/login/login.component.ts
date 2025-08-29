import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/login-request.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false,
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public loginRequest!: LoginRequest;
  public hide: boolean = true;

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    this.loginRequest = this.loginForm.value;

    this._userService.login(this.loginRequest).subscribe({
      next: () => {
        this._router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
