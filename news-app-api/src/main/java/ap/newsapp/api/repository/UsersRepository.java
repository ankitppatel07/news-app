package ap.newsapp.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import ap.newsapp.api.model.Users;

public interface UsersRepository extends MongoRepository<Users, Integer>  {
	
	
	
}
