import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { LineNewsComponent } from './view/line-news/line-news.component';
import {DashboardDarkComponent} from "./view/dashboard-dark/dashboard-dark.component";
import {StartcontentDarkComponent} from "./view/startcontent-dark/startcontent-dark.component";
import {StartPostBlockComponent} from "./view/start-post-block/start-post-block.component";
import {TredingSideComponent} from "./view/treding-side/treding-side.component";
import {ContentLineNewsComponent} from "./view/content-line-news/content-line-news.component";
import {DetailComponent} from "./view/detail/detail.component";
import {HeaderForumComponent} from "./view/header-forum/header-forum.component";
import {CategoryForumComponent} from "./view/category-forum/category-forum.component";
import {LatesForumComponent} from "./view/lates-forum/lates-forum.component";
import {ContentForumComponent} from "./view/content-forum/content-forum.component";
import {TopicForumComponent} from "./view/topic-forum/topic-forum.component";
import {CommentNewsComponent} from "./view/comment-news/comment-news.component";
import {DetailForumComponent} from "./view/detail-forum/detail-forum.component";
import {CommentTopicComponent} from "./view/comment-topic/comment-topic.component";
import { LineMarketComponent } from './view/line-market/line-market.component';
import { NetizenNewsComponent } from './view/netizen-news/netizen-news.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'lineNews',
        component: LineNewsComponent,
    },
    {
        path: 'dashboard-dark',
        component: DashboardDarkComponent,
    },
    {
        path: 'content-news',
        component: ContentLineNewsComponent,
    },
    {
        path: 'detail-news/:some-data',
        component: DetailComponent,
    },
    {
        path: 'header-forum',
        component: HeaderForumComponent,
    },
    {
        path: 'category-forum',
        component: CategoryForumComponent,
    },
    {
        path: 'lates-forum',
        component: LatesForumComponent,
    },
    {
        path: 'content-forum',
        component: ContentForumComponent,
    },
    {
        path: 'topic-forum',
        component: TopicForumComponent,
    },
    {
        path: 'detail-forum/:some-data',
        component: DetailForumComponent,
    },
    {
        path: 'comment-news',
        component: CommentNewsComponent,
    },
    {
        path: 'comment-topic',
        component: CommentTopicComponent,
    },
    {
        path: 'line-market',
        component: LineMarketComponent,
    },
    {
        path: 'netizen-news',
        component: NetizenNewsComponent,
    }

];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);