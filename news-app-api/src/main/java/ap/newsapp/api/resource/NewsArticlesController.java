package ap.newsapp.api.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@PostMapping("/addArticle")
	public String saveNewsArticle(@RequestBody NewsArticles newsArticle) {
		//generate sequence
		newsArticle.setId(sequenceGeneratorService.getSequenceNumber(NewsArticles.SEQUENCE_NAME));
		newsArticlesRepository.save(newsArticle);
		return "News Article Added with Id: " +newsArticle.getId();
	}
	
	@GetMapping("/findAllArticles")
	public List<NewsArticles> getNewsArticles() {
		return newsArticlesRepository.findAll();
	}
	
	@GetMapping("/findArticle/{id}")
	public Optional<NewsArticles> getNewsArticle(@PathVariable int id) {
		return newsArticlesRepository.findById(id);
	}
	
	@DeleteMapping("/deleteArticle/{id}")
	public String deleteArticle(@PathVariable int id) {
		newsArticlesRepository.deleteById(id);
		return "Article deleted with ID: " +id;
	}
	
}
