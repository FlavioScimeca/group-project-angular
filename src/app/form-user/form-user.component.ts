import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent {
  @Output('craeteUser') createUser = new EventEmitter<User>();

  username: string = '';
  password: string = '';

  onCreateUser() {
    if (this.username.trim() != '' && this.password.trim() != '') {
      let newUser = new User(this.username, this.password);
      this.createUser.emit(newUser);
      this.username = '';
      this.password = '';
    } else {
      console.log('controlla bene');
    }
  }
}
