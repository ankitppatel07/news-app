package ap.newsapp.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.DocExpansion;
import springfox.documentation.swagger.web.UiConfiguration;
import springfox.documentation.swagger.web.UiConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	/*
	 * To access documentation, 
	 * visit http://localhost:8080/swagger-ui/index.html
	 */

	@Bean
	Docket articlesConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("Articles API").select()
				.paths(PathSelectors.ant("/articles/*")).apis(RequestHandlerSelectors.basePackage("ap.newsapp")).build()
//				.tags(new Tag("Articles Controller", "API to perform CRUD Operations on Articles"))
				.apiInfo(new ApiInfoBuilder().version("1.0").title("Articles API").contact(contactDetails()).build());
	}

	@Bean
	Docket queriesConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("Queries API").select()
				.paths(PathSelectors.ant("/queries/*")).apis(RequestHandlerSelectors.basePackage("ap.newsapp")).build()
				.apiInfo(new ApiInfoBuilder().version("1.0").title("Queries API").contact(contactDetails()).build());
	}

	@Bean
	Docket usersConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2).groupName("Users API").select()
				.paths(PathSelectors.ant("/users/*")).apis(RequestHandlerSelectors.basePackage("ap.newsapp")).build()
				.apiInfo(new ApiInfoBuilder().version("1.0").title(" Users API").contact(contactDetails()).build());
	}

	private Contact contactDetails() {
		return new springfox.documentation.service.Contact("Ankit Patel", "https://github.com/ankitppatel07", "");
	}

	@Bean
	UiConfiguration uiConfig() {
		return UiConfigurationBuilder.builder()
				.docExpansion(DocExpansion.LIST).build();
	}
	
}
