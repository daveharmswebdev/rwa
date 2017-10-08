import { TagComponent } from './tag/tag.component';
import { QuestionComponent } from './question/question.component';
import { CategoryComponent } from './category/category.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'tags', component: TagComponent },
];
