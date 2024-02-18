package ap.newsapp.api.controller;

import java.util.List;
import java.util.logging.Logger;

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

import ap.newsapp.api.model.Articles;
import ap.newsapp.api.service.ArticlesService;

@RestController
public class ArticlesController {
	
	@Autowired
	private ArticlesService articlesService;
	
	Logger logger = Logger.getLogger(ArticlesController.class.getName()); 
	
	@GetMapping("/articles")
	public ResponseEntity<List<Articles>> getArticles() {
		logger.info("GET Request at /articles");
		return new ResponseEntity<List<Articles>>(articlesService.getArticles(), HttpStatus.OK);
	}
	
	@GetMapping("/articles/{id}")
	public ResponseEntity<Articles> getArticle(@PathVariable int id) {
		logger.info("GET Request at /articles/{id}");
		return new ResponseEntity<Articles>(articlesService.getArticle(id), HttpStatus.OK);
	}
	
	@GetMapping("/articles/latest")
	public ResponseEntity<List<Articles>> getLatestArticles() {
		logger.info("GET Request at /articles/latest");
		return new ResponseEntity<List<Articles>>(articlesService.getLatestArticles(), HttpStatus.OK);
	}
	
	@GetMapping("/articles/sports")
	public ResponseEntity<List<Articles>> getSportsArticles() {
		logger.info("GET Request at /articles/sports");
		return new ResponseEntity<List<Articles>>(articlesService.getSportsArticles(), HttpStatus.OK);
	}
	
	@GetMapping("/articles/sports/latest")
	public ResponseEntity<List<Articles>> getLatestSportsArticles() {
		logger.info("GET Request at /articles/sports/latest");
		return new ResponseEntity<List<Articles>>(articlesService.getLatestSportsArticles(), HttpStatus.OK);
	}
	
	@PostMapping("/articles")
	public ResponseEntity<String> saveArticle(@RequestBody Articles article) {
		logger.info("POST Request at /articles");
		articlesService.saveArticle(article);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "Article(Id: " +article.getId() + " is added.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.CREATED);
	}
	
	@PutMapping("/articles")
	public ResponseEntity<String> updateArticle(@RequestBody Articles article) {
		logger.info("PUT Request at /articles");
		Articles updatedArticle = articlesService.updateArticle(article);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "Article(Id: " +updatedArticle.getId() + " is updated.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/articles/{id}")
	public ResponseEntity<String> deleteArticle(@PathVariable int id) {
		logger.info("DELETE Request at /articles/{id}");
		articlesService.deleteArticle(id);
		return new ResponseEntity<String>("Article(Id: " + id + " is deleted.", HttpStatus.OK);
	}
	
}