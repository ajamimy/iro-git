import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GitHubService } from './gitHub.service';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes = [
  {
    path: '', component: SettingComponent
  },
  {
    path: 'setting', component: SettingComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  },

];


@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
