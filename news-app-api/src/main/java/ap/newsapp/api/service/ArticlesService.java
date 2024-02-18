package ap.newsapp.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import ap.newsapp.api.model.Articles;
import ap.newsapp.api.repository.ArticlesRepository;

import java.util.logging.Logger; 

@Service
public class ArticlesService {
	
	@Autowired
	private ArticlesRepository articlesRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	Logger logger = Logger.getLogger(ArticlesService.class.getName()); 


	public List<Articles> getArticles() {
		logger.info("Executing getArticles() method");
		return articlesRepository.findAll();
	}
	
	public Articles getArticle(int id) {
		logger.info("Executing getArticle(id) method");
		return articlesRepository.findById(id).get();
	}
	
	public List<Articles> getLatestArticles() {
		logger.info("Executing getLatestArticles() method");
		return articlesRepository.findLatestArticles();
	}
	
	public List<Articles> getSportsArticles() {
		logger.info("Executing getSportsArticles() method");
		return articlesRepository.findByCategory("Sports");
	}
	
	public List<Articles> getLatestSportsArticles() {
		logger.info("Executing getLatestSportsArticles() method");
		return articlesRepository.findLatestSportsArticles();
	}
	
	public void saveArticle(Articles article) {
		logger.info("Executing saveArticle() method");
		//generate sequence
		article.setId(sequenceGeneratorService.getSequenceNumber(Articles.SEQUENCE_NAME));
		article.setPublishedAt();
		articlesRepository.save(article);
	}
	
	public Articles updateArticle(Articles updatedArticle) {
		logger.info("Executing updateArticle() method");
		Articles article = articlesRepository.findById(updatedArticle.getId()).get();
		article.setTitle(updatedArticle.getTitle());
		article.setDescription(updatedArticle.getDescription());
		article.setCategory(updatedArticle.getCategory());
		article.setPublishedAt();
		articlesRepository.save(article);
		return article;
	}
	
	public void deleteArticle(@PathVariable int id) {
		logger.info("Executing deleteArticle() method");
		articlesRepository.deleteById(id);
	}
	
}
