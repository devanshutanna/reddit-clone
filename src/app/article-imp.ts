import { Article } from './article';

export class ArticleImp implements Article {
    constructor(public id:number, public votes: number, public title: string, public description: string) {
    }
}
