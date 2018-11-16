import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {RouterModule, Routes} from "@angular/router";
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemTextPipe } from './components/blog-item-text/blog-item-text.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';




const appRoutes: Routes = [
  {
    path: 'home-component',
    component: HomeComponentComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  }]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    BlogComponent,
    NavbarComponent,
    HomeComponentComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemTextPipe,
    FilterPipe,
    BlogHomeComponent,
    SearchBarComponent,
    BlogItemDetailComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

