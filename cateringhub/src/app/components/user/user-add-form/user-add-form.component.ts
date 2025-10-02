import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrl: './user-add-form.component.scss',
  standalone: false,
})
export class UserAddFormComponent {
  form!: FormGroup<any>;
}
