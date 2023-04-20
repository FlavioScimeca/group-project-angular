import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user.model';
import { Viaggio } from '../model/viaggio.model';

@Component({
  selector: 'app-form-viaggi',
  templateUrl: './form-viaggi.component.html',
  styleUrls: ['./form-viaggi.component.css'],
})
export class FormViaggiComponent {
  @Input() userForm: User;
  @Output() createTravel = new EventEmitter<Viaggio>();
  titolo: string;
  prezzo: number;
  descrizione: string;
  immagine: string;
  onStamp() {
    this.createTravel.emit(
      new Viaggio(
        this.titolo,
        this.prezzo,
        this.descrizione,
        this.immagine,
        this.userForm
      )
    );
  }
}
