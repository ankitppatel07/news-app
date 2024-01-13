package ap.newsapp.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ap.newsapp.api.model.Queries;

public interface QueriesRepository extends MongoRepository<Queries, Integer> {

}
