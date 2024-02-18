package ap.newsapp.api.service;

import java.util.Optional;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;

import ap.newsapp.api.model.Articles;
import ap.newsapp.api.repository.ArticlesRepository;

@ExtendWith(MockitoExtension.class)
@RunWith(MockitoJUnitRunner.class)
class ArticlesServiceTest {
	
	@InjectMocks
	private ArticlesService articlesService;
	
	@Mock
	private ArticlesRepository articlesRepository;
	
	@Mock
	private SequenceGeneratorService sequenceGeneratorService;
	
	@Captor
	private ArgumentCaptor<Articles> articlesArgumentCaptor;
	
	@BeforeEach
    public void setup() {
		/*This is deprecated. Alternative is using @RunWith(MockitoJUnitRunner.class)*/
		//		MockitoAnnotations.initMocks(this);
    }
	
	@Test
	@DisplayName("Should find Article by Id")
	public void shouldFindArticleById() {
		Articles article = new Articles(123, "Test Title", "Test Description",
				"General", "http://test.url", "http://test.url/test.jpg");
		
		Mockito.when(articlesRepository.findById(123)).thenReturn(Optional.of(article));
		
		Articles actualResponse = articlesService.getArticle(123);
		
		Assertions.assertThat(actualResponse.getId()).isEqualTo(article.getId());
		Assertions.assertThat(actualResponse.getArticleUrl()).isEqualTo(article.getArticleUrl());
	}
	
	
	@Test
	@DisplayName("Should save Article")
	public void shouldSaveArticle() {
		Articles article = new Articles(123, "Test Title", "Test Description",
				"General", "http://test.url", "http://test.url/test.jpg");
		
		Mockito.when(sequenceGeneratorService.getSequenceNumber("article_sequence")).thenReturn(123);
		
		articlesService.saveArticle(article);
		
		Mockito.verify(articlesRepository, Mockito.times(1)).save(articlesArgumentCaptor.capture());
		
		Assertions.assertThat(articlesArgumentCaptor.getValue().getId()).isEqualTo(123);
		Assertions.assertThat(articlesArgumentCaptor.getValue().getTitle()).isEqualTo("Test Title");
	}

}
