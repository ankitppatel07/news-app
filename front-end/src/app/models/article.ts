export class Article {
    id: string;
    title : string;
    description : string;
    category : string;
    articleUrl: string;
    imageUrl : string;
    publishedAt : string;

    constructor(title:string, description, category, articleUrl, imageUrl, publishedAt, id?:string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.articleUrl = articleUrl;
        this.imageUrl = imageUrl;
        this.publishedAt = publishedAt;
    }

    
}
