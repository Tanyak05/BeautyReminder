import { Step } from './step';
import { PlanPart } from './plan-part';
import { Injectable } from '@angular/core';
import {plainToClass} from "class-transformer";
import {classToPlain} from "class-transformer";

@Injectable()
export class MockPlan {
  plan: PlanPart[] = [];

  constructor() {

    console.log("MockPlan constructor");
    


    var temp = localStorage.getItem("currentPlan");

    if (temp != null){
      console.log("MockPlan constructor temp" , temp);
      let users = plainToClass(MockPlan, temp);
      console.log("MockPlan constructor plan" , users);
    } //else {

      let MorningStep = new PlanPart({time:"Morning", 
                                      steps:[new Step({description:"dayyyyy moisturazer",suggestedOrder:0,suggestedTime:"morning"}),
                                              new Step({description:"serum",suggestedOrder:0,suggestedTime:"morning"}),
                                              new Step({description:"sunscreen",suggestedOrder:0,suggestedTime:"morning"})]});

      let EveningStep = new PlanPart({time:"Evening", 
                                      steps:[new Step({description:"day moisturazer",suggestedOrder:0,suggestedTime:"evening"}),
                                              new Step({description:"serum",suggestedOrder:0,suggestedTime:"evening"}),
                                              new Step({description:"sunscreen",suggestedOrder:0,suggestedTime:"evening"})]});

      let WeeklyStep = new PlanPart({time:"Weekly", 
                                      steps:[new Step({description:"day moisturazer",suggestedOrder:0,suggestedTime:"weekly"}),
                                              new Step({description:"serum",suggestedOrder:0,suggestedTime:"weekly"}),
                                              new Step({description:"sunscreen",suggestedOrder:0,suggestedTime:"weekly"})]});

      this.plan.push(MorningStep);
      this.plan.push(EveningStep);
      this.plan.push(WeeklyStep);

      //localStorage.setItem("currentPlan",JSON.stringify(this));
    //}

    localStorage.setItem("currentPlan",JSON.stringify(classToPlain(this)));

    console.log("MockPlan constructor end");
  }

  query(params?: any) {
    if (!params) {
      return this.plan;
    }

    return this.plan.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: PlanPart) {
    this.plan.push(item);
  }

  delete(item: PlanPart) {
    this.plan.splice(this.plan.indexOf(item), 1);
  }
}
