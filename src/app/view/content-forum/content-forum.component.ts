import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { concat } from 'rxjs/operators/concat';
@Component({
    selector: 'app-content-forum',
    templateUrl: './content-forum.component.html',
    styleUrls: ['./content-forum.component.css'],
    providers: [GetdataService]
})
export class ContentForumComponent implements OnInit {
    public show: boolean = false;
    public buttonName: any = 'Show';
    public data: Subscription;
    public data2=[];
    public datalist;
    public cek;
    public idTopic;
    public lastcomment = [];
    public datas = [];
    public keyword;
    public sub;
    public params;
    public like = [];
    public topic = '';
    public topicArr = [];
    public targetArr = [];
    public TargetId = '';
    public Id1;
    public Id2;
    public likes: string[] = [];
    public likes2: string;
    public datasId=[];
    public a;
    public getCommentReplay = [];
    comments: Comment[];
    comment = new Comment();
    constructor(
        private service: GetdataService,
        public router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.service.GetAllTopic('all').subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                this.datas.push(data[i]);
                this.datasId.push(data[i]['_id']);
            }
            if (data.statusText == "OK") {
            }
        })
        this.service.GetLike('all').subscribe(data => {
            data.sort();
            var current = null;
            var cnt = 0;
            for (var i = 0; i < data.length; i++) {
                this.topic = data[i]['like_type'];
                this.TargetId = data[i]['targetId'];
               
                this.topicArr.push(this.topic);
                this.targetArr.push(this.TargetId)
                if (data[i].targetId != current) {
                    if (cnt > 0) {
                        // console.log('ini', current + ' comes --> ' + cnt + ' times<br>');
                    }
                    current = data[i].targetId;
                    cnt = 1; cnt++;
                }
            }
            this.likesCount(this.topicArr, this.targetArr);
        })

    }

    likesCount(type, id) {
        // console.log("this.datass",this.datasId.length)
        for (var i = 0; i < this.datasId.length; i++) {
            this.Id2 = id[i];
            this.service.likeCount('topic', this.datasId[i]).subscribe(res => {
                this.data2.push(res.jumlah);
                this.likes2 = res.jumlah;
                console.log("this.likes2    ",this.data2)
            })
            
        }
        // console.log("this.likes",this.likes)
        // for(let dt of this.likes){
        //     console.log("dt",dt)
        // }

       
    }

    Likes(id) {
        this.idTopic = id;
        console.log('this.idTopic', this.idTopic)
        this.service.SendLike('topic', 'tes', id).subscribe(res => {
            console.log("res like", res)
            if (res.statusText == "OK") {
                console.log('like success')
            } else {
                console.log('data not success')
            }
        });

    }

    clickId(val) {
        this.idTopic = val;
        this.router.navigate(['/detail-forum', val]);
    }


}
