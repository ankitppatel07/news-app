package ap.newsapp.api.controller;

import java.util.List;

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

import ap.newsapp.api.model.Queries;
import ap.newsapp.api.repository.QueriesRepository;
import ap.newsapp.api.service.SequenceGeneratorService;

@RestController
public class QueriesController {
	
	@Autowired
	private QueriesRepository queriesRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	@GetMapping("/queries")
	public List<Queries> getLatestSportsArticles() {
		return queriesRepository.findAll();
	}
	
	@PostMapping("/queries")
	public ResponseEntity<String> saveQuery(@RequestBody Queries query) {
		//generate sequence
		query.setId(sequenceGeneratorService.getSequenceNumber(Queries.SEQUENCE_NAME));
		queriesRepository.save(query);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "Query(Id: " +query.getId() + " is added.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
	@PutMapping("/queries")
	public ResponseEntity<String> updateQuery(@RequestBody Queries updatedQuery) {
		Queries query = queriesRepository.findById(updatedQuery.getId()).get();
		
		query.setEmail(updatedQuery.getEmail());
		query.setQuery(updatedQuery.getQuery());
		query.setStatus(updatedQuery.getStatus());
		queriesRepository.save(query);
		
		JSONObject obj = new JSONObject();
		obj.put("Response", "Query(Id: " +query.getId() + " is updated.");
		return new ResponseEntity<String>(obj.toString(), HttpStatus.OK);
	}
	
	@DeleteMapping("/queries/{id}")
	public String deleteQuery(@PathVariable int id) {
		queriesRepository.deleteById(id);
		return "Query(Id: " + id + " is deleted.";
	}

}
