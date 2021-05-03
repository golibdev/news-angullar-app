import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  contentDisplay: any = [];
  contentDisplay_org: any = [];
  keyword: any;
  apiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=06c1515b88344ea8a80ea29a7f29a9f7";
  constructor(private httpClient: HttpClient) { 
  }
  ngOnInit(): void {
    this.httpClient.get(this.apiUrl).subscribe((data: any) => {
      console.log(data);
      this.contentDisplay = data.articles;
      this.contentDisplay_org = data.articles;
    })
  }

  onNewsFilter() {
    this.contentDisplay = this.contentDisplay_org.filter(
      (statistics:any) => {
        return statistics.title.toLowerCase().includes(this.keyword.toLowerCase());
      }
    )
  }

}
