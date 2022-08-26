import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './panel/list/list.component';
import { DetailComponent } from './panel/detail/detail.component';
import { ComboboxComponent } from './object/combobox/combobox.component';
import { LoginComponent } from './panel/login/login.component';
import { TextboxComponent } from './object/textbox/textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    ComboboxComponent,
    LoginComponent,
    TextboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
