import { Component } from '@angular/core';
import { User } from './model/user.model';
import { Viaggio } from './model/viaggio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'group-project-angulaar';

  user: User;
  viaggi: Viaggio[] = [];

  onTravel(viaggio: Viaggio) {
    this.viaggi.push(viaggio);
  }
  onTakeUser(user: User) {
    this.user = user;
  }
}
