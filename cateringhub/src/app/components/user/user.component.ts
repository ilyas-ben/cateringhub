import { Component, OnInit, signal, Signal } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../../models/user.model';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent implements OnInit {
  public users!: Signal<User[]>;

  constructor(
    private readonly _userService: UserService,
    private readonly _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userService.findAll().subscribe((users) => {
      this.users = signal<User[]>(users);
    });
  }

  openUserAddForm() {
    const dialogRef = this._dialog.open(UserAddFormComponent, {});

    dialogRef.afterClosed().subscribe({
      next: (useradded: User) => {
        this.users = signal<User[]>([...this.users(), useradded]);
      },
    });
  }

  editUser(user: User) {
    const dialogRef = this._dialog.open(UserAddFormComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe({
      next: (useradded: User) => {
        this.getUsers();
      },
    });
  }

  deleteUser(user: User) {
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'app.users.deleteDialog.title',
        message: `app.users.deleteDialog.message ${user.username}?`,
        confirmText: 'app.users.deleteDialog.yes',
        cancelText: 'app.users.deleteDialog.no',
      },
    });

    (dialogRef.componentInstance as ConfirmDialogComponent).onConfirm = () => {
      this._userService.deleteById(user.id).subscribe(() => {
        this.getUsers();
      });
      dialogRef.close();
    };
  }
}
