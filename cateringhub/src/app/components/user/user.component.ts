import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../../models/user.model';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private readonly _userService: UserService,
    private readonly _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.findAll().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(user: User) {
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Are you sure?',
        message: `Do you really want to delete user ${user.username}?`,
        confirmText: 'Yes',
        cancelText: 'No',
      },
    });

    (dialogRef.componentInstance as ConfirmDialogComponent).onConfirm = () => {
      this._userService.deleteById(user.id).subscribe(() => {
        this.getUsers();
      });
      dialogRef.close();
    };
  }
  editUser(user: User) {
    throw new Error('Method not implemented.');
  }
}
