import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrl: './user-add-form.component.scss',
  standalone: false,
})
export class UserAddFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  userToModify?: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private readonly _userService: UserService,
    private readonly _dialogRef: MatDialogRef<UserAddFormComponent>
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.userToModify = this.data;
      this.form.patchValue({
        username: this.userToModify.username,
        email: this.userToModify.email,
        password: this.userToModify.password,
      });
    }
  }

  submit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const userAdd: User = this.userToModify
        ? {
            ...this.userToModify,
            username: formValue.username ?? '',
            email: formValue.email ?? '',
            password: formValue.password ?? '',
          }
        : ({
            username: formValue.username ?? '',
            email: formValue.email ?? '',
            password: formValue.password ?? '',
            // Add other required User fields with default values if needed
          } as User);

      this._userService.save([userAdd]).subscribe({
        next: () => {
          if (this.userToModify) alert('User modified successfully!');
          else alert('User added successfully!');

          this._dialogRef.close(userAdd);
        },
        error: (err) => {
          console.error('Error adding user:', err);
          alert('There was an error adding the user. Please try again.');
        },
      });
    }
  }
}
