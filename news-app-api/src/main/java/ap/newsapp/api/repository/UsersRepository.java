package ap.newsapp.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ap.newsapp.api.model.Users;

@Repository
public interface UsersRepository extends MongoRepository<Users, Integer>  {
	
	public Users findByEmail(String email);
	
}
