import { Component, OnInit, OnDestroy } from '@angular/core';
import { TagService } from './tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit, OnDestroy {
  tags: any[];
  sub: any;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.sub = this.tagService.getTags()
      .subscribe(tags => {
        this.tags = tags;
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
