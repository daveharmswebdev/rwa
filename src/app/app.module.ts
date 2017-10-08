import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { TagComponent } from './tag/tag.component';
import { QuestionComponent } from './question/question.component';

import { CategoryService } from './category/category.service';
import { QuestionService } from './question/question.service';
import { TagService } from './tag/tag.service';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    TagComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CategoryService,
    QuestionService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
