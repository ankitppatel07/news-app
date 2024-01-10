package ap.newsapp.api.resource;

import java.util.List;
import java.util.Date;
import java.util.Optional;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ap.newsapp.api.model.NewsArticles;
import ap.newsapp.api.repository.NewsArticlesRepository;
import ap.newsapp.api.service.SequenceGeneratorService;
import static com.mongodb.client.model.Sorts.descending;

@RestController
public class NewsArticlesController {
	
	@Autowired
	private NewsArticlesRepository newsArticlesRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@PostMapping("/add-article")
	public String saveNewsArticle(@RequestBody NewsArticles newsArticle) {
		//generate sequence
		newsArticle.setId(sequenceGeneratorService.getSequenceNumber(NewsArticles.SEQUENCE_NAME));
		newsArticle.setPublishedAt();
		newsArticlesRepository.save(newsArticle);
		return "News Article Added with Id: " +newsArticle.getId();
	}
	
	@GetMapping("/get-articles")
	public List<NewsArticles> getArticles() {
		return newsArticlesRepository.findAll();
	}
	
	@GetMapping("/get-latest-articles")
	public List<NewsArticles> getLatestArticles() {
		return newsArticlesRepository.findLatestArticles();
	}
	
	@GetMapping("/get-article/{id}")
	public Optional<NewsArticles> getNewsArticle(@PathVariable int id) {
		return newsArticlesRepository.findById(id);
	}
	
	@DeleteMapping("/delete-article/{id}")
	public String deleteArticle(@PathVariable int id) {
		newsArticlesRepository.deleteById(id);
		return "Article deleted with ID: " +id;
	}
	
	@GetMapping("/get-sports-articles")
	public List<NewsArticles> getSportsArticles() {
		return newsArticlesRepository.findByCategory("Sports");
	}
	
	@GetMapping("/get-latest-sports-articles")
	public List<NewsArticles> getLatestSportsArticles() {
		return newsArticlesRepository.findLatestSportsArticles();
	}
	
	
}
