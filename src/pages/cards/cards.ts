import { PlanPartPage } from './../plan-part/planpart';
import { MockPlan } from './../../data-structures/MockPlan';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  //plan:MockPlan;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plan:MockPlan) {
    console.log ("CardsPage constr" , plan);
    if (plan== null)
      this.plan = new MockPlan();
  }

  openItem(item) {
    this.navCtrl.push(PlanPartPage, {
      item: item
    });
  }
}