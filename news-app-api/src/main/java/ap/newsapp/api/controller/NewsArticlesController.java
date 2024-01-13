package ap.newsapp.api.controller;

import java.util.List;
import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ap.newsapp.api.model.NewsArticles;
import ap.newsapp.api.repository.NewsArticlesRepository;
import ap.newsapp.api.service.SequenceGeneratorService;

@RestController
public class NewsArticlesController {
	
	@Autowired
	private NewsArticlesRepository newsArticlesRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@GetMapping("/articles")
	public List<NewsArticles> getArticles() {
		return newsArticlesRepository.findAll();
	}
	
	@GetMapping("/articles/{id}")
	public Optional<NewsArticles> getNewsArticle(@PathVariable int id) {
		return newsArticlesRepository.findById(id);
	}
	
	@GetMapping("/articles/latest")
	public List<NewsArticles> getLatestArticles() {
		return newsArticlesRepository.findLatestArticles();
	}
	
	@GetMapping("/articles/sports")
	public List<NewsArticles> getSportsArticles() {
		return newsArticlesRepository.findByCategory("Sports");
	}
	
	@GetMapping("/articles/sports/latest")
	public List<NewsArticles> getLatestSportsArticles() {
		return newsArticlesRepository.findLatestSportsArticles();
	}
	
	@PostMapping("/articles")
	public ResponseEntity<String> saveNewsArticle(@RequestBody NewsArticles newsArticle) {
		//generate sequence
		newsArticle.setId(sequenceGeneratorService.getSequenceNumber(NewsArticles.SEQUENCE_NAME));
		newsArticle.setPublishedAt();
		newsArticlesRepository.save(newsArticle);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "Article(Id: " +newsArticle.getId() + " is added.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
	@PutMapping("/articles")
	public ResponseEntity<String> updateNewsArticle(@RequestBody NewsArticles updatedNewsArticle) {
		NewsArticles newsArticle = newsArticlesRepository.findById(updatedNewsArticle.getId()).get();
		newsArticle.setTitle(updatedNewsArticle.getTitle());
		newsArticle.setDescription(updatedNewsArticle.getDescription());
		newsArticle.setCategory(updatedNewsArticle.getCategory());
		newsArticle.setPublishedAt();
		newsArticlesRepository.save(newsArticle);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "Article(Id: " +newsArticle.getId() + " is updated.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
	@DeleteMapping("/articles/{id}")
	public String deleteArticle(@PathVariable int id) {
		newsArticlesRepository.deleteById(id);
		return "Article(Id: " + id + " is deleted.";
	}
	
}