import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GitHubService {

  apiKey = 'fc0c4e1ec49d0c022df6519574a1a2ca';

  url;
  constructor(public http: HttpClient) {
    this.url = 'http://api.github.com/repos/';

  }


  getissues(owner, repo) {
    return this.http.get(this.url + owner + '/' + repo + '/issues');

  }


}
