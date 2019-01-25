import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponentComponent} from './components/home-component/home-component.component';
import {BlogComponent} from './components/blog/blog.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import { FilterPipe } from './pipes/filter.pipe';
import {DataService} from './services/data-service.service';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import {AuthService} from './services/auth-service.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';



const appRoutes: Routes = [
  {
    path: 'home-component',
    component: HomeComponentComponent,

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

  },
  {
    path: 'blog/detail/:id',
    component: BlogDetailComponent,

  },
  {
    path: 'blog/create',
    component: BlogCreateComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Signup',
    component: SignupComponent,
  },
  ];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponentComponent,
    BlogComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    FilterPipe,
    BlogItemDetailComponent,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogCreateComponent,
    BlogDetailComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],

  bootstrap: [AppComponent, AppComponent]
})
export class AppModule {
}
