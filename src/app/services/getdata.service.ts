import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetdataService {
    constructor(
        private http: Http) { }
    getList(category, limit) {
        let url = 'http://192.168.99.40:3000/news/category=' + category + '/' + 'limit=' + limit;
        let getData = this.http.get(url);
        console.log("url limit 3", url)
        return getData.map(res => { return res.json(); });
    }
    getListAll(category) {
        let url = 'http://192.168.99.40:3000/news/category=' + category ;
        let getData = this.http.get(url);
        return getData.map(res => { return res.json(); });
    }
    getDetail(id) {
        let url = 'http://192.168.99.40:3000/news/id=' + id;
        let getData = this.http.get(url);
        return getData.map(res => { return res.json(); });
    }

    SendComment(newsId, komentar) {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        let data = {newsId: newsId, komentar: komentar};
        var json = JSON.stringify(data);
        let url = 'http://192.168.99.40:3000/komentar';
        let getData = this.http.post(url, json,{
            headers:header
        });
        return getData.map(res => {
            return res
        });
    }

    SendReplay(komenId, komentar) {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        let data = {komenId:komenId, komentar: komentar};
        var json = JSON.stringify(data);
        let url = 'http://192.168.99.40:3000/komentar/reply';
        let getData = this.http.post(url, json,{
            headers:header
        });
        return getData.map(res => {
            return res
        });
    }

    GetComment(newsId) {
        let url = 'http://192.168.99.40:3000/komentar/newsId='+newsId;
        let getData = this.http.get(url);
        return getData.map(res => {
            return res.json();
        });
    }

    GetCommentReply(komenId) {
        let url = 'http://192.168.99.40:3000/komentar/komenId='+komenId;
        let getData = this.http.get(url);
        return getData.map(res => {
            return res.json();
        });
    }

    register(password,email,fullname,username ) {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        let data = { "password": password,"email": email,"fullname": fullname,  "username": username };
        var json = JSON.stringify(data);
        let url = 'http://192.168.99.40:3000/login/';
        let getData = this.http.post(url, json, {
            headers: header
        });
        return getData.map(res => { return res });

    }

    NewsService(keywords, start, size) {
        var header = new Headers();
        header.append("content-type", "application/x-www-form-urlencoded");
        let data = { "keywords": keywords, "start": start, "size": size};
        var json = JSON.stringify(data);
        let url = 'http://112.78.142.154:10769/IS_Key';
        let getData = this.http.post(url, json, {
            headers: header
        });
        return getData.map(res => { return res });

    }


    // loginUser(data) {
    //     var header = new Headers();
    //     header.append('Content-Type', 'application/json');
    //     let datas = { "username": data.username, "password": data.password };
    //     var json = JSON.stringify(data);
    //     let url = 'http://192.168.99.40:3000/login/';
    //     let getData = this.http.post(url, json, {
    //         headers: header
    //     });
    //     return getData.map(res => { return res });
    // }

    loginUser(data) {
        let params = [];
        let body = [];
        if (data.username) { params.push('username=' + data.username) } else { }
        if (data.password) { params.push('password=' + data.password) } else { }
        let url = 'http://192.168.99.40:3000/login/' + params.join('&');
        let getData = this.http.get(url);
        return getData.map(res => { return res.json(); });
    }

    SendTopic(moderator,judul_topic ,isi_topic, category) {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        let data = {moderator : moderator,judul_topic:judul_topic , isi_topic:isi_topic, category:category};
        var json = JSON.stringify(data);
        let url = 'http://192.168.99.40:3000/topic';
        let getData = this.http.post(url, json,{
            headers:header
        });
        return getData.map(res => {
            return res
        });
    }

    GetAllTopic(category) {
        let url = 'http://192.168.99.40:3000/topic/category='+category;
        let getData = this.http.get(url);
        return getData.map(res => { return res.json(); });
    }

    GetDetailTopic(id) {
        let url = 'http://192.168.99.40:3000/topic/id='+id;
        let getData = this.http.get(url);
        return getData.map(res => { return res.json(); });
    }

    SendLike(like_type, userId, targetId) {
        var header = new Headers();
        header.append('Content-Type', 'application/json');
        let data = {like_type:like_type, userId: userId, targetId:targetId };
        var json = JSON.stringify(data);
        let url = 'http://192.168.99.40:3000/like';
        let getData = this.http.post(url, json,{
            headers:header
        });
        return getData.map(res => {
            return res
        });
    }

    GetLike(id) {
        let url = 'http://192.168.99.40:3000/like/type='+id;
        let getData = this.http.get(url);
        console.log("url", url)
        return getData.map(res => { return res.json(); });
    }

    likeCount(type, id) {
        let params = [];
        let body = [];
        if (type) { params.push('type=' + type) }
        if (id) { params.push('id=' + id) } 
        let url = 'http://192.168.99.40:3000/like/count/' + params.join('/');
        let getData = this.http.get(url);
        console.log("a... count", url)
        return getData.map(res => { return res.json(); });
    }

}
