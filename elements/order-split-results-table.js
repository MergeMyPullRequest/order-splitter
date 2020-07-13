import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import "@polymer/paper-tooltip/paper-tooltip.js";
import "@polymer/iron-location/iron-location.js";
import {QueryStringParser} from '../common/parsers.js';
import {Order} from '../common/order.js';
import {formatUSD} from '../common/main.js';

export class OrderSplitResultsTable extends PolymerElement {
    static get is() {
        return "order-split-results-table";
    }
    static get properties() {
        return {
            order: {
                type: Object,
                observer: '_onOrderChanged'
            }
        };
    }
    static get template() {
        return html`
        <style>
            :host {
                @apply(--paper-font-common-base);
                --paper-tooltip: {
                    font-size: 12px;
                }
            }
            span.chip {
                @apply(--paper-font-common-base);
                /* background-color: var(--paper-grey-300); */
                padding: 5px;
                border-radius: 14px;
                line-height: 38px;
            }
            td {
                white-space: nowrap; /* maintain dignity on small-width windows */
            }
            div#main {
                padding: 20px;
                margin: 20px;
                background: white;
            }
            .totals-row .chip {
                font-weight: bold;
            }
            .totals-row > td:first-child {
                font-weight: bold;
            }
        </style>
        <div id="main">
            <table>
                <template is="dom-repeat" items="[[_computeBreakdownItems(order.people)]]">
                    <tr>
                        <td>[[item.name]]</td>
                        <td>
                            <span class="chip">[[_formatUSD(item.price)]] price</span>
                        </td>
                        <td>
                            +
                            <span class="chip">[[_multiplyUSD(item.price, order.taxPercent)]] tax <paper-tooltip>[[item.price]] x [[order.taxPercent]]</paper-tooltip></span>
                        </td>
                        <td>
                            +
                            <span class="chip">[[_computeFeesPerPersonUSD(order, item.name)]] fee <paper-tooltip>[[_computeFeesPerPersonTooltip(order, item.name)]]</paper-tooltip></span>
                        </td>
                        <td>
                            +
                            <span class="chip">[[_multiplyUSD(item.price, order.tipPercent)]] tip <paper-tooltip>[[item.price]] x [[order.tipPercent]]</paper-tooltip></span>
                        </td>
                        <td>
                            =
                            <span class="chip">[[_computePersonTotalUSD(item.name)]]</span>
                        </td>
                    </tr>
                </template>
                <tr class="totals-row">
                    <td>Everyone</td>
                    <td>
                        <span class="chip">[[_formatUSD(order.subTotal)]] subtotal</span>
                    </td>
                    <td>
                        +
                        <span class="chip">[[_formatUSD(order.tax)]] tax</span>
                        <paper-tooltip>[[_divide(order.tax, order.subTotal)]]%</paper-tooltip>
                    </td>
                    <td>
                        +
                        <span class="chip">[[_formatUSD(order.fee)]] fee</span>
                    </td>
                    <td>
                        +
                        <span class="chip">[[_formatUSD(order.tipDollars)]] tip</span>
                        <paper-tooltip>[[_divide(order.tip, order.subTotal)]]%</paper-tooltip>
                    </td>
                    <td>
                        =
                        <span class="chip">[[_formatUSD(order.total)]] total<paper-tooltip>subtotal + tax + fees + tip</paper-tooltip></span>
                    </td>
                </tr>
            </table>
            <paper-button on-tap="_onClipboardTap" raised>Copy to Clipboard</paper-button>
            <textarea id="textForClipboard" value="[[_makeTextForClipboard(order.totals)]]" hidden></textarea>

            <iron-location 
                on-query-changed="_handleQueryStringChanged">
            </iron-location>
        </div>
    `;
    }

    constructor() {
        super();
        this.hidden = true;
    }
    _onClipboardTap() {
        this.$.textForClipboard.hidden = false;
        this.$.textForClipboard.select();
        var successful = document.execCommand('copy');
        if (!successful) {
            console.error('clipboard copy failed');
        } else {
            this.$.textForClipboard.hidden = true;
        }
    }
    _computeBreakdownItems(people) {
        if (!people) {
            return [];
        }
        return Array.from(this.order.people.entries()).map(([name, price]) => ({ name, price }));
    }
    _computeFeesPerPersonUSD(order, name) {
        if (!order) return;
        return this._formatUSD(order.feesPerPerson[name]);
    }
    _computeFeesPerPersonTooltip(order, name) {
        if (!order) return;
        return `${order.untaxedFees} x ${order.people.get(name)} / ${order.subTotal}`;
    }
    _computePersonTotalUSD(name) {
        return this._formatUSD(this.order.totals.get(name));
    }
    _multiplyUSD(a, b) {
        return this._formatUSD(a * b);
    }

    _onOrderChanged(order) {
        console.log(order);
        if (order && order.constructor !== Order) {
            throw new Error('order must be of type Order');
        }
        this.hidden = !order;
    }
    _formatUSD(n) {
        return formatUSD(n);
    }
    _divide(dividend, divisor) {
        return dividend/divisor;
    }
    /**
     * Returns a listing of names to split costs
     * @param {object} totals - The totals property from the Order
     * @returns {string} A view mapping names to split costs
     */
    _makeTextForClipboard(totals) {
        if (!this.order) {
            return;
        }
        // get length of longest name
        var longestName = -1;
        for (var [person, price] of totals) {
            longestName = Math.max(person.length, longestName);
        }

        // add 1 to longest name for a space after name
        longestName += 1;

        var name;
        var output = '```\n';
        for (let [person, price] of totals) {
            let name = person;
            for (var i = person.length; i < longestName; i++) {
                name += ' ';
            }
            output += name + this._formatUSD(price) + '\n';
        }
        output += '```\n';

        return output + '\n' + this._makeUrl(this.order);
    }
    _makeUrl(order) {
        if (!this.order) {
            return;
        }

        var params = {};
        params.tax = order.tax;
        params.fee = order.fee;
        params.tip = order.tipDollars;

        var paramString = [...Object.entries(params), ...order.people.entries()].map(([key, value]) => `${key}=${value}`).join('&');

        return location.href.split('?')[0] + '?' + paramString;
    }
    _handleQueryStringChanged(e, {value}) {
        this.order = new QueryStringParser().parse();
    }
}

window.customElements.define(OrderSplitResultsTable.is, OrderSplitResultsTable);
