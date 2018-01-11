import { Component } from '@angular/core';
import { UsersPage } from '../users/users';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 lists:any[]=[];

  constructor(public navCtrl: NavController) {
    this.lists.push({
      name:'Nicolas'
    });
    this.lists.push({
      name:'Nicolas 1'
    });
    this.lists.push({
      name:'Nicolas 2'
    });
  }
  
goToUsersPage()
{
  this.navCtrl.push( UsersPage );
}
}
