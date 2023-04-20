import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaViaggiComponent } from './lista-viaggi/lista-viaggi.component';
import { ViaggioComponent } from './lista-viaggi/viaggio/viaggio.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormViaggiComponent } from './form-viaggi/form-viaggi.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaViaggiComponent,
    ViaggioComponent,
    FormUserComponent,
    FormViaggiComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
