import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  owner: string;
  repo: string;

  constructor(private router: Router) {


  }

  ngOnInit() {
  }


  saveForm() {

    let coordonations = {
      owner: this.owner,
      repo: this.repo
    };

    localStorage.setItem('coordonations', JSON.stringify(coordonations));
    this.router.navigate(['home']);
  }

}
