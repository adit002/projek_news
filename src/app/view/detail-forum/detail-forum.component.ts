import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-forum',
  templateUrl: './detail-forum.component.html',
  styleUrls: ['./detail-forum.component.css'],
    providers: [GetdataService]
})
export class DetailForumComponent implements OnInit {
    public data: Subscription;
    public lastcomment = [];
    public allcomment=[];
    public datalist;
    public datas = [];
    public detaildata;
    public detailNews = [];
    public keyword;
    public sub;
    public params;
    comments: Comment[];
    comment = new Comment();
    constructor(
        private service: GetdataService,
        public router: Router,
        private route: ActivatedRoute,
    ) { }
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.params = params['some-data'];
      });
      this.data = this.service.GetDetailTopic(this.params).subscribe(res => {
          this.detaildata = res;
          this.detailNews.push(this.detaildata);
      })
  }

  like(){
      console.log('like')
      this.service.SendLike('topic','tes',this.params).subscribe(res => {
          if (res.statusText == "OK"){
            console.log('like success')
          }else {
              console.log('data not success')
          }
      });
  }

}
