import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../gitHub.service';
import { EMPTY } from 'rxjs';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coordonations = {
    owner: '',
    repo: ''
  };
  issues: any;
  error: boolean = false;
  value: any;
  totalRecords: Number;
  page: Number = 1

  constructor(private _GitHubService: GitHubService, private router: Router) {

  }


  ngOnInit() {

    this.value = localStorage.getItem('coordonations');

    if (this.value != null) {
      this.coordonations = JSON.parse(this.value);
    } else {
      this.coordonations = {
        owner: '',
        repo: ''

      }
    }

    this._GitHubService.getissues(this.coordonations.owner, this.coordonations.repo).pipe(
      catchError(err => {
        this.issues = null;
        this.error = true;
        this.router.navigate(['not-found']);
        return EMPTY;
      }))

      .subscribe(
        response => {
          console.log(response);
          this.issues = response;
          this.totalRecords = this.issues.lenght
          this.error = false;
        }
      );
  }


}
