import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './practice/users/users.component';
import { DatatypesComponent } from './practice/datatypes/datatypes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DatatypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
