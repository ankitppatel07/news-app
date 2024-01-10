package ap.newsapp.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

import ap.newsapp.api.model.NewsArticles;

public interface NewsArticlesRepository extends MongoRepository<NewsArticles, Integer> {
	public List<NewsArticles> findByCategory(String category);
	
	/*$sort key ordering must be 1 (for ascending) or -1 (for descending)*/
	@Aggregation(pipeline = {
			"{ '$match': { 'category' : 'Sports' } }",
			"{ '$sort' : { 'publishedAt' : -1 } }",
		    "{ '$limit' : 3 }"
			}	
		  )
	public List<NewsArticles> findLatestSportsArticles();

//	public List<NewsArticles> findByCategoryOrderByPublishedAtDesc(String category);
	
	@Aggregation(pipeline = {
			"{ '$sort' : { 'publishedAt' : -1 } }",
		    "{ '$limit' : 3 }"
			}	
		  )
	public List<NewsArticles> findLatestArticles();
	
}
