import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MockPlan } from '../data-structures/MockPlan';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = TabsPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public plan: MockPlan) {
    this.plan = new MockPlan();
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

}
