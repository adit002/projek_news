import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-line-news',
  templateUrl: './content-line-news.component.html',
  styleUrls: ['./content-line-news.component.css'],
  providers: [GetdataService]
})
export class ContentLineNewsComponent implements OnInit {
    public data: Subscription;
    public dataNews = [];

  constructor(
      private service: GetdataService,
      public router: Router,
      private route: ActivatedRoute,
      ) { }

  ngOnInit() {
      this.service.getListAll('all').subscribe(data=> {
          for (let i = 0; i<data.length; i++){
              this.dataNews.push(data[i])
          }
      })


  }
    clickId(val) {
        this.router.navigate(['/detail-news', val]);
        console.log('id:',val)
    }

    onNews(){
        this.service.NewsService("jazz", 0, 50).subscribe(res => {
            console.log("okk bisa")
        })
        }
    
}
