import { User } from './user.model';

export class Viaggio {
  titolo: string;
  prezzo: number;
  descrizione: string;
  immagine: string;
  user: User;
  constructor(
    titolo: string,
    prezzo: number,
    descrizione: string,
    immagine: string,
    user: User
  ) {
    this.titolo = titolo;
    this.prezzo = prezzo;
    this.descrizione = descrizione;
    this.immagine = immagine;
    this.user = user;
  }
}
