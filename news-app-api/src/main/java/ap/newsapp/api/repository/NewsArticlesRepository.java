package ap.newsapp.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ap.newsapp.api.model.NewsArticles;

public interface NewsArticlesRepository extends MongoRepository<NewsArticles, Integer> {

}
