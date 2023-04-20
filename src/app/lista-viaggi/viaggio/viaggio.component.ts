import { Component, Input } from '@angular/core';
import { Viaggio } from 'src/app/model/viaggio.model';

@Component({
  selector: 'app-viaggio',
  templateUrl: './viaggio.component.html',
  styleUrls: ['./viaggio.component.css'],
})
export class ViaggioComponent {
  @Input() viaggio: Viaggio;
}
