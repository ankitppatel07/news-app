package ap.newsapp.api.service;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.stereotype.Service;

import ap.newsapp.api.model.DbSequence;

@Service
public class SequenceGeneratorService {

	@Autowired
	private MongoOperations mongoOperations;
	
	public int getSequenceNumber(String sequenceName) {
		//Get Sequence No
		Query query = new Query(Criteria.where("id").is(sequenceName));
		//Update the Sequence No
		Update update = new Update().inc("seqNo", 1);
		//Modify in Document
		DbSequence counter = mongoOperations.findAndModify(query, update, 
				FindAndModifyOptions.options().returnNew(true).upsert(true), DbSequence.class);

		return !Objects.isNull(counter) ? counter.getSeqNo() : 1;
	}
	
}
