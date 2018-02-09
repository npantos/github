import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {GitService} from "../../shared/GitService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    //gits: Array<{id: number, name: string, html_url: string}>;
  gits;
  username: string;

  constructor(public navCtrl: NavController,
              public gitService: GitService,
              public http: HttpClient,
              public alertCtrl: AlertController) {


  }

  search(username){
      this.gitService.getAll(username).subscribe(
          (item: any[]) =>{
              this.gits = item;
          },
          (error) => {
              this.alertCtrl.create({
                  title:'Greška',
                  subTitle : JSON.stringify(error.message),
                  buttons: ['OK']
              }).present();
          },
      );
  }



}
