import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserComponent } from './components/sample1/user/user.component';
// import { UserComponent } from './components/sample2/user/user.component';
import { UserComponent } from './components/templatesyntax/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
