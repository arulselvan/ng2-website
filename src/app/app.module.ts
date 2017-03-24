import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { PageComponent } from './page/page.component'
import 'hammerjs';

const appRoutes: Routes = [
  { path: '', component: HomeComponent ,pathMatch:'full'},
  { path: ':slug',
    component: PageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavigationComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
