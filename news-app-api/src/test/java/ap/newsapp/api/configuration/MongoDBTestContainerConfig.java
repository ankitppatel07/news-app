package ap.newsapp.api.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.testcontainers.containers.MongoDBContainer;
import org.testcontainers.junit.jupiter.Container;

@Profile("test")
@Configuration
@EnableMongoRepositories("ap.newsapp.api.repository")
public class MongoDBTestContainerConfig {

	@Container
    public static MongoDBContainer mongoDBContainer = new MongoDBContainer("mongo:4.0.10")
            .withExposedPorts(27017);

    static {
        mongoDBContainer.start();
        Integer mappedPort = mongoDBContainer.getMappedPort(27017);
        System.setProperty("mongodb.container.port", String.valueOf(mappedPort));        
    }
}
