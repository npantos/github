import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()

export class GitService {

    // todos: Array<{title: string, note: string, date: Date}>;
    // gits: Array<{id: number, name: string, html_url: string}>;


    constructor(public http: HttpClient) {

    }


    getAll(username) {

        return this.http.get('https://api.github.com/users/' + username + '/repos');
    }


}