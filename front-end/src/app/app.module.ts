import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { WeatherReportComponent } from './components/home/weather-report/weather-report.component';
import { ImageSliderComponent } from './components/home/image-slider/image-slider.component';
import { LatestNewsComponent } from './components/home/latest-news/latest-news.component';
import { ChatBoxComponent } from './components/shared/chat-box/chat-box.component';
import { NewsArticlesComponent } from './components/home/news-articles/news-articles.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent } from './admin/login/login.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';
import { ViewNewsListComponent } from './admin/view-news-list/view-news-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SportsComponent } from './components/sports/sports.component';
import { ViewQueriesComponent } from './admin/view-queries/view-queries.component'; 
import { AuthGuard } from './guards/auth.guard';
import { UserListComponent } from './admin/user-list/user-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { QuerySearchPipe } from './pipes/query-search.pipe'

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'login', component: AdminComponent},
  { path: 'add-news', component: AddNewsComponent, canActivate: [AuthGuard] },
  { path: 'view-news', component: ViewNewsListComponent, canActivate: [AuthGuard] },
  { path: 'view-queries', component: ViewQueriesComponent, canActivate: [AuthGuard] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
  { path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    WeatherReportComponent,
    ImageSliderComponent,
    LatestNewsComponent,
    ChatBoxComponent,
    NewsArticlesComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    AddNewsComponent,
    ViewNewsListComponent,
    AboutUsComponent,
    ContactUsComponent,
    SportsComponent,
    ViewQueriesComponent,
    UserListComponent,
    SearchPipe,
    UserSearchPipe,
    QuerySearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    RouterModule.forRoot(routes, {}),
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
