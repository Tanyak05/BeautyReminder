import { Injectable } from '@angular/core';

/*
let TimeOfTheDay = {


    Morning: 1,
    Day: 2,
    Evning: 3,
}
*/


@Injectable()
export class Step {
    description: string;
    suggestedTime: any;
    suggestedOrder: number;
    id: any;


    public constructor(init?: Partial<Step>) {
        Object.assign(this, init);
    }

}
