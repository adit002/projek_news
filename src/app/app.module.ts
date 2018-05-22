import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {GetdataService} from "./services/getdata.service";
import { routing } from './app.routing';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { HomeComponent } from './view/home/home.component';
import { DetailComponent } from './view/detail/detail.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { LineNewsComponent } from './view/line-news/line-news.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DashboardDarkComponent } from './view/dashboard-dark/dashboard-dark.component';
import { StartcontentDarkComponent } from './view/startcontent-dark/startcontent-dark.component';
import { StartPostBlockComponent } from './view/start-post-block/start-post-block.component';
import { TredingSideComponent } from './view/treding-side/treding-side.component';
import { CopyRightComponent } from './view/copy-right/copy-right.component';
import { FooterDarkComponent } from './view/footer-dark/footer-dark.component';
import { ContentLineNewsComponent } from './view/content-line-news/content-line-news.component';
import { HeaderForumComponent } from './view/header-forum/header-forum.component';
import { ContentForumComponent } from './view/content-forum/content-forum.component';
import { CategoryForumComponent } from './view/category-forum/category-forum.component';
import { LatesForumComponent } from './view/lates-forum/lates-forum.component';
import { TopicForumComponent } from './view/topic-forum/topic-forum.component';
import { CommentNewsComponent } from './view/comment-news/comment-news.component';
import { DetailForumComponent } from './view/detail-forum/detail-forum.component';
import { CommentTopicComponent } from './view/comment-topic/comment-topic.component';
import { LogComponent } from './view/log/log.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {LineMarketComponent} from "./view/line-market/line-market.component";
import {NetizenNewsComponent} from "./view/netizen-news/netizen-news.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    LineNewsComponent,
    DashboardDarkComponent,
    StartcontentDarkComponent,
    StartPostBlockComponent,
    TredingSideComponent,
    CopyRightComponent,
    FooterDarkComponent,
    ContentLineNewsComponent,
    HeaderForumComponent,
    ContentForumComponent,
    CategoryForumComponent,
    LatesForumComponent,
    TopicForumComponent,
    CommentNewsComponent,
    DetailForumComponent,
    CommentTopicComponent,
    LogComponent,
    LineMarketComponent,
    NetizenNewsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    NgxCarouselModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    ReactiveFormsModule,
    NgxPaginationModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
