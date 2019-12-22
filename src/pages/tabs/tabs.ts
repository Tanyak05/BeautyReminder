import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { CardsPage } from './../cards/cards';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CardsPage;
  tab2Root: any = CardsPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}