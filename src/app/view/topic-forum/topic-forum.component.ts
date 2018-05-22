import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topic-forum',
  templateUrl: './topic-forum.component.html',
  styleUrls: ['./topic-forum.component.css'],
    providers: [GetdataService]
})
export class TopicForumComponent implements OnInit {

    public show:boolean = false;
    public buttonName:any = 'Show';
    public data: Subscription;
    public datalist;
    public lastcomment = [];
    public datas = [];
    public keyword;
    public sub;
    public params;
    public getCommentReplay = [];
    comments: Comment[];
    comment = new Comment();
    constructor(
        private service: GetdataService,
        public router: Router,
        private route: ActivatedRoute,
    ) { }
  ngOnInit() {
  }

    SendTopic(moderator,judul_topic , category, isi_topic) {
        this.service.SendTopic(moderator,judul_topic , category, isi_topic).subscribe(res => {
          console.log(res)
            if (res.statusText == "OK"){
                this.router.navigate(['/header-forum']);
            //     this.service.GetComment(this.params).subscribe(data=> {
            //         let last = data.length -1;
            //         this.lastcomment.push(data[last]);
            //         console.log(this.lastcomment)
            //     })
            }else {
                console.log('data not success')
            }
        });
    }

}
