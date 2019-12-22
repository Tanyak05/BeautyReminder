import { MockPlan } from './../../data-structures/MockPlan';
import { PlanPartPage } from './../plan-part/planpart';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  morinigTime:string;
  eveningTime:string;
  weeklyTime:string;
  monthlyTime:string;

  planPartTime:number;

  //plan:MockPlan;


  constructor(public navCtrl: NavController, public navParams: NavParams,public plan:MockPlan) {
    console.log("SettingsPage constr");
    if (plan== null)
      this.plan = new MockPlan();

    let temp = localStorage.getItem("morinigTime");
    this.morinigTime= (temp!=null) ? temp : new Date().toISOString();
    temp = localStorage.getItem("eveningTime");
    this.eveningTime= (temp!=null) ? temp : new Date().toISOString();
    temp = localStorage.getItem("weeklyTime");
    this.weeklyTime= (temp!=null) ? temp : new Date().toISOString();
    temp = localStorage.getItem("monthlyTime");
    this.monthlyTime= (temp!=null) ? temp : new Date().toISOString();

    //this.plan = new MockPlan();

    this.planPartTime = 0;
  }

  saveChanges(){
    console.log("saveChanges");
    localStorage.setItem("morinigTime", this.morinigTime);
    localStorage.setItem("eveningTime", this.eveningTime);
    localStorage.setItem("weeklyTime", this.weeklyTime);
    localStorage.setItem("monthlyTime", this.monthlyTime); 
  } 

  cancelChanges(){
    //TODO
    //this.navCtrl.pop();
  }

  partForEdit(){
      this.navCtrl.push(PlanPartPage, {
      item: this.plan.plan[this.planPartTime],
      plan: this.plan,
      isEditMode: true
    }); 
  }


}
