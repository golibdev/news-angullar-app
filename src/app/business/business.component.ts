import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  businessDisplay: any = [];
  businesDisplay_org: any = [];
  keyword: any;
  apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=06c1515b88344ea8a80ea29a7f29a9f7"
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.apiUrl).subscribe((data: any) => {
      this.businessDisplay = data.articles;
      this.businesDisplay_org = data.articles;
    });
  }

  onNewsFilter() {
    this.businessDisplay = this.businesDisplay_org.filter(
      (statistics:any) => {
        return statistics.title.toLowerCase().includes(this.keyword.toLowerCase());
      }
    )
  }

}
