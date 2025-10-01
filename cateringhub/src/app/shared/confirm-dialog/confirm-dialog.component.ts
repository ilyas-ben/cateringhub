import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  standalone: false,
})
export class ConfirmDialogComponent {
  title: string = 'Are you sure?';
  message: string = 'Do you really want to perform this action?';
  confirmText: string = 'Yes';
  cancelText: string = 'No';

  @Input() onConfirm: () => void = () => {};

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.title = data.title || this.title;
      this.message = data.message || this.message;
      this.confirmText = data.confirmText || this.confirmText;
      this.cancelText = data.cancelText || this.cancelText;
    }
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  confirm() {
    if (this.onConfirm) {
      this.onConfirm();
    }
  }
}
