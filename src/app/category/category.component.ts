import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {
  categories: Category[];
  sub: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.sub = this.categoryService.getCategories()
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
