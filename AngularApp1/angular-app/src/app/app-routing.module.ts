import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatypesComponent } from './practice/datatypes/datatypes.component';
import { HomeComponent } from './practice/home/home.component';
import { PostComponent } from './practice/post/post.component';
import { UsersComponent } from './practice/users/users.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'datatypes', component: DatatypesComponent },
  { path: 'post', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
