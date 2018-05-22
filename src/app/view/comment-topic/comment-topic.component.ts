import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-topic',
  templateUrl: './comment-topic.component.html',
  styleUrls: ['./comment-topic.component.css'],
  providers: [GetdataService]
})
export class CommentTopicComponent implements OnInit {

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
      this.sub = this.route.params.subscribe(params => {
          this.params = params['some-data'];
      });

      this.service.GetComment(this.params).subscribe(data=> {
          for (let i = 0; i<data.length; i++){
              this.datas.push(data[i]);
          }
      })
  }

    SendComment(data) {
        this.service.SendComment(this.params,data).subscribe(res => {
            if (res.statusText == "OK"){
                // document.getElementById('text').value = "";
                this.service.GetComment(this.params).subscribe(data=> {
                    let last = data.length -1;
                    this.lastcomment.push(data[last]);
                    console.log(this.lastcomment)
                })
            }else {
                console.log('data not success')
            }
        });


    }

    replay (i) {
        this.show = i;
        if(this.show) {
            this.buttonName = "Hide";
        } else {
            this.buttonName = "Show";
        }
    }

    close () {
        document.getElementById('textkomen').style.display='none';
    }

    SendCommentReplay(komenId,komentar,i) {
        this.service.SendReplay(komenId,komentar).subscribe(res => {
            console.log(komenId);
            if (res.statusText == "OK"){
                this.show = i;
                if(this.show) {
                    this.buttonName = "Hide";
                } else {
                    this.buttonName = "Show";
                }
                document.getElementById('textkomen').style.display='none';
                this.service.GetCommentReply(komenId).subscribe(data=> {
                    let last = data.length -1;
                    this.getCommentReplay.push(data[last]);
                })
            }else {
                console.log('data not success')
            }
        });


    }

}
