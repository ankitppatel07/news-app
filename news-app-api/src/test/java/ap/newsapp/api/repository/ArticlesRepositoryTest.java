package ap.newsapp.api.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;

import ap.newsapp.api.configuration.MongoDBTestContainerConfig;
import ap.newsapp.api.model.Articles;


//@Testcontainers 
/* 
 * TestContainers suggests using Singleton Pattern to 
 * initialize Test Container only once for every test
 * Therefore using MongoDBTestContainerConfig instead of @Testcontainers
 * */
@DataMongoTest
@ContextConfiguration(classes = MongoDBTestContainerConfig.class)
@TestInstance(Lifecycle.PER_CLASS)
@ActiveProfiles("test")
class ArticlesRepositoryTest extends MongoDBTestContainerConfig {
/*
	@Container
	static MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:4.0.10").withExposedPorts(27018);
*/	
	@Autowired
    MongoTemplate mongoTemplate;
	
	@Autowired
	ArticlesRepository articlesRepository;
	
	@AfterAll
	void stopContainers() {
		System.out.println("Shutting down the Test Container");
		mongoDBContainer.stop();
	}
	
	@Test
	@DisplayName("Integration Testing")
	public void shouldSaveArticle1() {
		Articles article = new Articles(123, "Test Title", "Test Description",
				"General", "http://test.url", "http://test.url/test.jpg");
		article.setPublishedAt();
		articlesRepository.save(article);
		Articles savedArticle = articlesRepository.findById(123).get();

		assertThat(savedArticle).usingRecursiveComparison()
			.ignoringFields("id", "publishedAt").isEqualTo(article);
	}
	

 

}
