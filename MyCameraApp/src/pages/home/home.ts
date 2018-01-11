import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CameraPreview } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController,
    private diagnostic: Diagnostic) {
      this.checkPermissions();
  }

  checkPermissions() {
    // More code goes here
    this.diagnostic.isCameraAvailable().then((authorized) => {
      if(authorized)
          this.initializePreview();
      else {
        this.diagnostic.requestCameraAuthorization().then((status) => {
              if(status ==  this.diagnostic.permissionStatus.GRANTED)
                  this.initializePreview();
              else {
                  // Permissions not granted
                  // Therefore, create and present toast
                  this.toastCtrl.create(
                      {
                          message: "Cannot access camera", 
                          position: "bottom",
                          duration: 5000
                      }
                  ).present();
              }
          });
      }
  });
 }

 initializePreview() {
  // Make the width and height of the preview equal 
  // to the width and height of the app's window
  
  // More code goes here
}
}
