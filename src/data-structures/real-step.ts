import { Injectable } from '@angular/core';

//import { Item } from '../../models/item';
//import { Api } from '../api/api';
import { Step } from './step';

@Injectable()
export class RealStep {
    step: Step;
    time: any;
    //order: number;

    public constructor(init?: Partial<RealStep>) {
        Object.assign(this, init);
    }

}
