import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
 
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   }
    // ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

