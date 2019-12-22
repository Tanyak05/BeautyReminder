import { MockPlan } from './../../data-structures/MockPlan';
import { PlanPart } from './../../data-structures/plan-part';

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Step } from '../../data-structures/step';

@Component({
  selector: 'page-planpart',
  templateUrl: 'planpart.html'
})
export class PlanPartPage {
  partPlan:PlanPart;
  isEditMode:boolean;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public plan:MockPlan,
              platform: Platform) {

    if (plan== null)
      this.plan = new MockPlan(); 
                 
    this.partPlan = navParams.get('item');

    let temp = navParams.get('isEditMode');
    this.isEditMode = ( temp!= null ? temp :false);

    platform.registerBackButtonAction(() => {
      console.log("backPressed 1");
    },1);

  }

  ionViewWillLeave() {
    console.log('leaving page');
    if (this.isEditMode && this.plan != null){
      localStorage.setItem("currentPlan",JSON.stringify(this.plan));
      console.log('leaving page + plan saved');
    }
  } 

  editStep(step){
    console.log('editStep plan',step);

    let prompt = this.alertCtrl.create({
      title: 'Edit Step',
      inputs: [{
          name: 'description',
          placeholder: step.description
      }],
      buttons: [
          {
              text: 'Cancel'
          },
          {
              text: 'Modify',
              handler: data => {
                  console.log('editStep  new data',data);
                  step.description = data.description;
              }
          }
      ]
    });

    prompt.present();
  }  
  
  deleteStep(step){
    console.log('deleteNote plan',step, this.partPlan.steps);

    let index = this.partPlan.steps.indexOf(step);
 
    if(index > -1){
      this.partPlan.steps.splice(index, 1);
    }

    console.log('deleteNote  ended plan',this.partPlan);
  }

  addNote(){
    let prompt = this.alertCtrl.create({
      title: 'Add New Step',
      inputs: [{
          name: 'description'
      }],
      buttons: [
          {
              text: 'Cancel'
          },
          {
              text: 'Add',
              handler: data => {
                  console.log('addNote  new data',data);
                  let newStep = new Step({description:data.description,
                                          suggestedOrder:0,
                                          suggestedTime:this.partPlan.time});
                  this.partPlan.steps.push(newStep);
              }
          }
      ]
    });

    prompt.present();

  }
}