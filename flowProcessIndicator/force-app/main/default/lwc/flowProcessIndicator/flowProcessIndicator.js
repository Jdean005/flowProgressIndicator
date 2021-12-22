import { LightningElement,api } from 'lwc';

export default class FlowProcessIndicator extends LightningElement {
@api displayName;
@api currentNumber;

get progressStyle() {
    return `width: ${this.currentNumber};
    background:#162f77;`;
    }
} 