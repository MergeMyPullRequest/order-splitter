import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "@polymer/paper-item/paper-item.js";


class ExampleOrder extends PolymerElement {
    static get is() {
        return "example-order";
    }

    static get properties() {
        return {
            orders: Array,
            selectedOrder: Array,
            orderTypes: Array
        };
    }

    static get template() {
        return html`
              <style>
                  .horizontal.layout {
                    display: flex;
                    flex-direction: row;
                  }
                  .vertical.layout {
                    display: flex;
                    flex-direction: column;
                  }
                  .pointer {
                      cursor: pointer;
                  }
                  .padding-right {
                      padding-right: 20px;
                  }
              </style>
              <div class="horizontal layout">
                  <div class="padding-right vertical layout">
                      <dom-repeat items="[[orderTypes]]">
                          <template>
                              <paper-item class="pointer" on-click="_selectItem">[[item]]</paper-item>
                          </template>
                      </dom-repeat>
                  </div>
                  <span>[[selectedOrder]]</span>
              </div>
              <array-selector id="selector" items="{{orders}}" selected="{{selectedOrder}}"></array-selector>
            `;
    }


    _selectItem(e) {
        this.$.selector.selectIndex(e.model.index);
    }

    getData() {
        let root = window.location.origin;
        root += window.location.pathname.replace("index.html", "");
        fetch(root+"data/exampleOrders.json")
            .then(stream => stream.body.getReader().read())
            .then(({value, done}) => this.parse(value))
            .then(orders => {
                this.orderTypes = Array.from(orders.keys());
                this.orders = Array.from(orders.values());
                this.selectedOrder = this.orders[0];
            });
    }

    parse(value) {
        const string = value.reduce((acc, code) => acc += String.fromCharCode(code), "");
        const json = JSON.parse(string);
        let ret = new Map();
        for(const orderType in json) {
            const order = json[orderType];
            ret.set(orderType, order);
        }
        return ret;
    }

    ready() {
        super.ready();
        this.getData();
    }
}

window.customElements.define(ExampleOrder.is, ExampleOrder);
