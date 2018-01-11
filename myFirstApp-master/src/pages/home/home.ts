import { Component, ViewChild } from '@angular/core';
import { IonicPage, AlertController, NavController, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';
import { FeedProvider, Feed } from '../../providers/feed/feed';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
 
  rootPage = 'FeedListPage';
  feeds: Feed[];

  constructor(private navController: NavController, public afAuth: AngularFireAuth, private feedProvider: FeedProvider, public alertCtrl: AlertController, private qrScanner: QRScanner) { }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logOut(){
    this.afAuth.auth.signOut();
    this.navController.setRoot(LoginPage);
  }

  public addFeed() {
    let prompt = this.alertCtrl.create({
      title: 'Catch Wave',
      inputs: [
        {
          name: 'title',
          placeholder: 'Wave QR Code'
        },
        {
          name: 'url',
          placeholder: 'https://www.ion-book.com/feed.xml'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let newFeed = new Feed(data.title, data.url);
            this.feedProvider.addFeed(newFeed).then(
              res => {
                this.loadFeeds();
              }
            );
          }
        },
        {
          text: 'ScanQRCode',
          handler: data => {this.scanQRCode();}
        }
      ]
    });
    prompt.present();
  }
 
  private loadFeeds() {
    this.feedProvider.getSavedFeeds().then(
      allFeeds => {
        this.feeds = allFeeds;
      });
  }
 
  public openFeed(feed: Feed) {
    this.nav.setRoot('FeedListPage', { 'selectedFeed': feed });
  }
 
  public ionViewWillEnter() {
    this.loadFeeds();
  }

  public scanQRCode()
  {

  // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted


        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

        // show camera preview
        this.qrScanner.show();

        // wait for user to scan something, then the observable callback will be called

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }
}
