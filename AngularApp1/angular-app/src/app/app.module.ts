import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { UserComponent } from './components/sample1/user/user.component';
// import { UserComponent } from './components/sample2/user/user.component';
import { UserComponent } from './components/templatesyntax/user/user.component';

import { UsersComponent } from './practice/users/users.component';
import { DatatypesComponent } from './practice/datatypes/datatypes.component';
import { HomeComponent } from './practice/home/home.component';
import { NavbarComponent } from './practice/navbar/navbar.component';
import { PostComponent } from './practice/post/post.component';
import { UsereventsComponent } from './components/sampleevents/userevents/userevents.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    DatatypesComponent,
    HomeComponent,
    NavbarComponent,
    PostComponent,
    UsereventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
