import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class FlowRedirectlwc extends NavigationMixin(LightningElement) {
    @api recId;
    @api ObjectAPIName;
    @api DefaultNavigation;
    connectedCallback() {
        // Generate a URL to a record page
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recId,
                objectApiName: this.ObjectAPIName,
                actionName: this.DefaultNavigation
            }
        }).then(url => { window.location = (url)});
    }
}