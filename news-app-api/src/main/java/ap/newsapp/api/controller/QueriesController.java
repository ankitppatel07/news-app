package ap.newsapp.api.controller;

import java.util.List;
import java.util.logging.Logger;

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

import ap.newsapp.api.model.Queries;
import ap.newsapp.api.service.QueriesService;

@RestController
public class QueriesController {
	
	@Autowired
	private QueriesService queriesService;
	
	Logger logger = Logger.getLogger(QueriesController.class.getName()); 
	
	@GetMapping("/queries")
	public List<Queries> getLatestSportsArticles() {
		logger.info("GET Request at /queries");
		return queriesService.getLatestSportsArticles();
	}
	
	@PostMapping("/queries")
	public ResponseEntity<String> saveQuery(@RequestBody Queries query) {
		logger.info("POST Request at /queries");
		return new ResponseEntity<String>(queriesService.saveQuery(query), HttpStatus.OK);
	}
	
	@PutMapping("/queries")
	public ResponseEntity<String> updateQuery(@RequestBody Queries updatedQuery) {
		logger.info("PUT Request at /queries");
		return new ResponseEntity<String>(queriesService.updateQuery(updatedQuery), HttpStatus.OK);
	}
	
	@DeleteMapping("/queries/{id}")
	public ResponseEntity<String> deleteQuery(@PathVariable int id) {
		logger.info("DELETE Request at /queries/{id}");
		return new ResponseEntity<String>(queriesService.deleteQuery(id), HttpStatus.OK);
	}

}
