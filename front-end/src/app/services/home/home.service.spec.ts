import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HomeService } from './home.service';
import { ARTICLES } from 'src/app/data/articles';
import { Article } from 'src/app/models/article';

describe('HomeService', () => {
  let service: HomeService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ] //because HomeService has dependency on HttpClient
    });
    service = TestBed.inject(HomeService);
    testingController = TestBed.inject(HttpTestingController);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all articles', () => {
    service.getAllArticles().subscribe(
      (articles: Article[]) => {
        expect(articles).toBeTruthy(); 
        expect(articles.length).toBe(2);
        const testData = articles.find((article) => 
          article.category == "Sports"
        );
        expect(testData?.category).toBe("Sports");
      }
    );

    const mockReq = testingController.expectOne('http://localhost:8080/articles');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(ARTICLES));
  });

  afterEach(() => {
    testingController.verify();
  })
  
});
