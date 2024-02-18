package ap.newsapp.api.service;

import java.util.List;
import java.util.logging.Logger;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ap.newsapp.api.model.Queries;
import ap.newsapp.api.repository.QueriesRepository;

@Service
public class QueriesService {
	@Autowired
	private QueriesRepository queriesRepository;
	
	@Autowired
	private SequenceGeneratorService sequenceGeneratorService;
	
	Logger logger = Logger.getLogger(QueriesService.class.getName()); 
	
	public List<Queries> getLatestSportsArticles() {
		return queriesRepository.findAll();
	}
	
	public String saveQuery(Queries query) {
		logger.info("Executing saveQuery(query) method");

		//generate sequence
		query.setId(sequenceGeneratorService.getSequenceNumber(Queries.SEQUENCE_NAME));
		try {
			queriesRepository.save(query);
		} catch(Exception e) {
			System.out.println("Exception occured while saving Query!!!" +e);
		}
		JSONObject obj = new JSONObject();
		obj.put("Response", "Query(Id: " +query.getId() + " is added.");
		return obj.toString();
	}
	
	public String updateQuery(Queries updatedQuery) {
		logger.info("Executing updateQuery(updatedQuery) method");

		Queries query = queriesRepository.findById(updatedQuery.getId()).get();
		
		query.setEmail(updatedQuery.getEmail());
		query.setQuery(updatedQuery.getQuery());
		query.setStatus(updatedQuery.getStatus());
		try {
			queriesRepository.save(query);
		} catch(Exception e) {
			System.out.println("Exception occured while updating Query!!!" +e);
		}
		JSONObject obj = new JSONObject();
		obj.put("Response", "Query(Id: " +query.getId() + " is updated.");
		return obj.toString();
	}
	
	public String deleteQuery(int id) {
		logger.info("Executing deleteQuery(id) method");

		queriesRepository.deleteById(id);
		return "Query(Id: " + id + " is deleted.";
	}
	
	
}
