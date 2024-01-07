export class NewsArticle {
    id: string;
    title : string;
    description : string;
    category : string;
    articleUrl: string;
    imageUrl : string;
    publishedAt : string;

    constructor(id, title, description, category, articleUrl, imageUrl, publishedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.articleUrl = articleUrl;
        this.imageUrl = imageUrl;
        this.publishedAt = publishedAt;
    }

    
}
