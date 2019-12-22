import { Injectable } from "@angular/core";
import { Step } from "./step";

@Injectable()
export class PlanPart{
    time:string;
    steps:Step[];

    public constructor(init?: Partial<PlanPart>) {
        Object.assign(this, init);
    }
}

/* 
@Injectable()
export class PlanPartWeekly extends PlanPart{
    weekDays:any;
    
    public constructor(init?: Partial<PlanPartWeekly>) {
        super(init);
        Object.assign(this, init);
    }

} */