import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurdService } from './services/guards/auth-guard.service';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', 
    component: UsersComponent, 
    // canActivate:[AuthGaurdService] ,
    canActivateChild:[AuthGaurdService],
    children:[{
      path: ':id/:name', component: UserComponent
    }] },
  { path: 'categories', component: CategoriesComponent },
  { path: 'filter-pipes', component: FilterPipesComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo:'not-found' },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
