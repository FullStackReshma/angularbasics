import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './services/guards/auth.service';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountComponent } from './count/count.component';
import { ProductListComponent } from './poke-base/product-list/product-list.component';
import { ProductDetailComponent } from './poke-base/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PokeTemplateFormComponent } from './poke-base/poke-template-form/poke-template-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGaurdService } from './services/guards/auth-guard.service';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortenPipe } from './Pipes/shorten.pipe';
import { FilterPipe } from './Pipes/filter.pipe';




@NgModule({
  declarations: [	
    AppComponent,
    PieChartComponent,
    CountComponent, 
    ProductListComponent,
    ProductDetailComponent,
    PokeTemplateFormComponent,
    SignUpComponent,
    AngularBasicsComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    PageNotFoundComponent,
    FilterPipesComponent,
    ShortenPipe,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
