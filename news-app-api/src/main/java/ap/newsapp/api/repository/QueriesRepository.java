package ap.newsapp.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ap.newsapp.api.model.Queries;


@Repository
public interface QueriesRepository extends MongoRepository<Queries, Integer> {

}
