package ap.newsapp.api.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


import java.util.Arrays;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import ap.newsapp.api.model.Articles;
import ap.newsapp.api.service.ArticlesService;

@WebMvcTest(controllers = ArticlesController.class)
class ArticlesControllerTest {
	
	@MockBean
	private ArticlesService articlesService;
	
	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@DisplayName("Should list all articles when making GET Request to: /articles")
	void shouldGetArticles() throws Exception{
		Articles article1 = new Articles(1, "Test Title1", "Test Description1",
				"General", "http://test1.url", "http://test1.url/test.jpg");
		
		Articles article2 = new Articles(2, "Test Title2", "Test Description2",
				"General", "http://test2.url", "http://test2.url/test.jpg");
		
		Mockito.when(articlesService.getArticles()).thenReturn(Arrays.asList(article1, article2));
		
		mockMvc.perform(get("/articles/"))
		.andExpect(status().is(200))
		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		.andExpect(jsonPath("$.size()", Matchers.is(2)))
        .andExpect(jsonPath("$[0].id", Matchers.is(1)))
        .andExpect(jsonPath("$[0].title", Matchers.is("Test Title1")))
        .andExpect(jsonPath("$[0].description", Matchers.is("Test Description1")))
        .andExpect(jsonPath("$[0].category", Matchers.is("General")))
        .andExpect(jsonPath("$[0].articleUrl", Matchers.is("http://test1.url")))
        
        .andExpect(jsonPath("$[1].id", Matchers.is(2)))
        .andExpect(jsonPath("$[1].title", Matchers.is("Test Title2")))
        .andExpect(jsonPath("$[1].description", Matchers.is("Test Description2")))
        .andExpect(jsonPath("$[1].category", Matchers.is("General")))
        .andExpect(jsonPath("$[1].articleUrl", Matchers.is("http://test2.url")))
        ;
		
	}
	
	
	
}
