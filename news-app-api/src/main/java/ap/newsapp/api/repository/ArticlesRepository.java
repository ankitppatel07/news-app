package ap.newsapp.api.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ap.newsapp.api.model.Articles;

@Repository
public interface ArticlesRepository extends MongoRepository<Articles, Integer> {
	public List<Articles> findByCategory(String category);
	
	/*$sort key ordering must be 1 (for ascending) or -1 (for descending)*/
	@Aggregation(pipeline = {
			"{ '$match': { 'category' : 'Sports' } }",
			"{ '$sort' : { 'publishedAt' : -1 } }",
		    "{ '$limit' : 3 }"
			}	
		  )
	public List<Articles> findLatestSportsArticles();
	
	@Aggregation(pipeline = {
			"{ '$sort' : { 'publishedAt' : -1 } }",
		    "{ '$limit' : 3 }"
			}	
		  )
	public List<Articles> findLatestArticles();
	
}
