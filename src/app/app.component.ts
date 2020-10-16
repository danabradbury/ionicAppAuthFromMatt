import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { AuthObserver } from 'ionic-appauth';

const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  authObserver: AuthObserver;

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('initialize the app');
    this.platform.ready().then(() => {
      console.log('Platform ready, hide the splash screen');
      SplashScreen.hide();
    });
  }
}
