import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maximized-article',
  templateUrl: './maximized-article.component.html',
  styleUrls: ['./maximized-article.component.css']
})
export class MaximizedArticleComponent implements OnInit {

  article: Article;
  constructor(private route: ActivatedRoute, private service: DataService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      console.log(params);
      console.log(params.id);
      return this.service.getArticles().subscribe(res => {
        for(let article of res) {
          if(article.id == params['id']) {
            this.article = article;
            break;
          }
        }
      });
    });
  }

}
