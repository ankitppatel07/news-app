package ap.newsapp.api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "newsarticles")
public class NewsArticles {
	
	@Transient
	public static final String SEQUENCE_NAME = "article_sequence";
	
	@Id
	private int id;
	private String title;
	private String description;
	private String category;
	private String articleUrl;
	private String imageUrl;

	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
	
	public String getArticleUrl() {
		return articleUrl;
	}
	
	public void setArticleUrl(String articleUrl) {
		this.articleUrl = articleUrl;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	@Override
	public String toString() {
		return "NewsArticles [id=" + id + ", title=" + title + ", description=" + description + ", category=" + category
				+ ", articleUrl=" + articleUrl + ", imageUrl=" + imageUrl + "]";
	}
	
}
