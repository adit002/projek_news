import { Component, OnInit } from '@angular/core';
import { GetdataService } from "../../services/getdata.service";
import { Subscription } from 'rxjs/Subscription';
import { useAnimation } from '@angular/core/src/animation/dsl';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public data: Subscription;
  constructor(
    private service :GetdataService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  register(password, email,name  , username){
    console.log("ok")
      this.data = this.service.register(password,email,name, username, ).subscribe(res => {
        // this.router.navigate(['/login']);
        window.location.href="/login"
      })

  }

}
