import { Component, Input } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-form-viaggi',
  templateUrl: './form-viaggi.component.html',
  styleUrls: ['./form-viaggi.component.css'],
})
export class FormViaggiComponent {
  @Input() userForm: User;

  onStamp() {
    console.log(this.userForm);
  }
}
