import { Component, Input } from '@angular/core';
import { Viaggio } from '../model/viaggio.model';

@Component({
  selector: 'app-lista-viaggi',
  templateUrl: './lista-viaggi.component.html',
  styleUrls: ['./lista-viaggi.component.css'],
})
export class ListaViaggiComponent {
  @Input() viaggi: Viaggio[];
}
