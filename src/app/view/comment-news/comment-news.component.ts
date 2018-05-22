import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';
@Component({
  selector: 'app-comment-news',
  templateUrl: './comment-news.component.html',
  styleUrls: ['./comment-news.component.css'],
  providers: [GetdataService]
})
export class CommentNewsComponent implements OnInit {
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
    public UserLogin;
    constructor(
        private service: GetdataService,
        public router: Router,
        private route: ActivatedRoute,
        private localStorageService: LocalStorageService,
    ) { }

  ngOnInit() {
    let currUser = JSON.parse(localStorage.getItem('currentUser'));
    
     this.UserLogin = currUser.Username;
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
    if( this.UserLogin){
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
      }else{
          alert("Anda belum log in")
          window.location.href = "/login";

      }

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