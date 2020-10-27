import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleImp } from '../article-imp';
import { DataService } from '../data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Array<Article> = [];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getArticles().subscribe(res => {
      this.articles = res;
      // res.forEach(element => {
      //   this.articles.push(new ArticleImp(res.id, res.votes, res.title, res.description));
      // });

      console.log(res);
    });
  }
}
