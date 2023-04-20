import { Component } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'group-project-angulaar';

  onTakeUser(user: User) {
    console.log(user);
  }
}
