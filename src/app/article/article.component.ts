import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Input() opend: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  upvote() {
    console.log("upvote");
    this.article.votes++;
  }
  downvote() {
    console.log("downvote");
    this.article.votes--;
  }
}
