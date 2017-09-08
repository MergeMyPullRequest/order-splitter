import parsers from '../common/parsers.js';
import Order from '../common/order.js';
import {defineCustomElement, Utils} from '../common/main.js';
defineCustomElement('order-input', class extends Polymer.Element {
    static get template() {
        return `        <style>
            .hidden {
                display: none;
            }
            paper-input {
                /* display: inline-block; */
                max-width: 100px;
                --paper-input-container: { 
                    padding: 0;
                };
            }
            paper-checkbox {
                margin-left: 10px;
            }
            paper-button {
                margin-top: 10px;
            }
            #tipContainer {
                display: flex;
                align-items: flex-end;
            }
            span[slot="prefix"] {
                padding-right: 2px;
            }
            div[contenteditable] {
                border: 1px dotted black;
                overflow-x: auto;
                overflow-y: auto;
                height: 500px;
            }
        </style>
        <div>
            <div id="input" contenteditable="true" on-input="_onInputChanged" autofocus></div>
            <!-- <textarea id="textarea" rows="20" cols="60" placeholder="Paste order details here"></textarea> -->
            <!-- <paper&#45;input type="number" label="Taxes" id="tax"> -->
            <!--     <span slot="prefix">$</span> -->
            <!-- </paper&#45;input> -->
            <!-- <paper&#45;input type="number" label="Fees"  id="fee"> -->
            <!--     <span slot="prefix">$</span> -->
            <!-- </paper&#45;input> -->
            <!-- <div id="tipContainer"> -->
            <!-- <paper&#45;input type="number" label="Tip"   id="tip"> -->
            <!--     <span slot="prefix" class$="[[_computeTipDollarClass(usePercentForTip)]]">$</span> -->
            <!--     <span slot="suffix" class$="[[_computeTipPercentClass(usePercentForTip)]]">%</span> -->
            <!-- </paper&#45;input> -->
            <!-- <paper&#45;checkbox checked="{{usePercentForTip}}" on&#45;tap="_onCheckboxTap">Percentage</paper&#45;checkbox> -->
            <!-- </div> -->
            <!-- <paper&#45;button id="split" on&#45;tap="_onSplitButtonTap">Split</paper&#45;button> -->
        </div>
        <iron-location id="location"></iron-location>
        `;
    }
 
    _onInputChanged() {
        {
            let header = this.$.input.querySelector('header');
            if (header) header.hidden = true;
        }

        const order = parsers.getUserInputParsers().reduce((order, parser) => {
            if (order && order.hasPeople) {
                return order;
            }
            try {
                return new parser().parse(this.$.input).split();
            } catch (e) {
                console.error('Developer Error!', e);
                return false;
            }
        }, null);
        if (order && order.hasPeople) {
            this._changeUrl(order);
        }
    }
    ready() {
        super.ready();
        this.usePercentForTip = JSON.parse(localStorage.getItem('usePercentForTip'));
        this.$.input.focus();
    }
    // _computeTipPercentClass() {
    //     return this.usePercentForTip ? '' : 'hidden';
    // }
    // _computeTipDollarClass() {
    //     return !this.usePercentForTip ? '' : 'hidden';
    // }
    // _onSplitButtonTap() {
    //     var text = this.$.textarea.value;
    //     var tax = Number(this.$.tax.value || 0);
    //     var fee = Number(this.$.fee.value || 0);
    //     var tip = Number(this.$.tip.value || 0);
    //     var isTipPercentage = this.usePercentForTip;
    //
    //     var order;
    //     try {
    //         order =  new parsers.OrderUpParser().parse(text, fee, tax, tip, isTipPercentage).split();
    //     } catch(e) {
    //         console.error('OrderUp parser failed', e);
    //         console.log('trying csv parser');
    //         order =  new parsers.CsvParser().parse(text).split();
    //     }
    //     this._changeUrl(order);
    // }
    // _onCheckboxTap() {
    //     localStorage.setItem('usePercentForTip', JSON.stringify(!this.usePercentForTip));
    // }
    _changeUrl(order) {
        if (!order || !order.hasPeople) {
            this.$.location.query = '';
            return;
        }
        let query = 'tax=' + order.tax + '&fee=' + order.fee + '&tip=' + order.tipDollars;

        for (var [person, val] of order.people) {
            query += '&' + encodeURIComponent(person) + '=' + Utils._formatUSD(val)
                .slice(1)          // remove '$'
                .replace(/,/g,''); // remove commas in really big numbers (like that ever happens at lunch)
        }
        this.$.location.query = query;
    }
});

