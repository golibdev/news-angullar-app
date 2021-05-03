import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  technologyDisplay: any = [];
  technologyDisplay_org: any = [];
  keyword: any;
  apiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=06c1515b88344ea8a80ea29a7f29a9f7";
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.apiUrl).subscribe((data: any) => {
      this.technologyDisplay = data.articles;
      this.technologyDisplay_org = data.articles;
    })
  }

  onNewsFilter() {
    this.technologyDisplay = this.technologyDisplay_org.filter((statistics:any) =>{
      return statistics.title.toLowerCase().includes(this.keyword.toLowerCase())
    });
  }

}
