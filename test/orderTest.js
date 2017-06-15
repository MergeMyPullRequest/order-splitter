var expect = require('expect.js');
const parsers = require('../common/parsers.js');
const Order = require('../common/order.js');

let testData = JSON.parse(require('fs').readFileSync('data/orders-test.json'));

let dataMap = new Map();
for (let parserName in testData) {
    dataMap.set(parserName, testData[parserName]);
}

for(let [parserName, orders] of dataMap) {
    let Parser = parsers[parserName];
    let parser = new Parser();
    describe(parserName, () => {
        orders.forEach(({input, expected}) => {
            let order;
            beforeEach(() => {
                let inputText = input.text.reduce((acc, curr) => acc+'\n'+curr, "");
                order = parser.parse(inputText);
                if(input.tip) {
                    order.withTip(input.tip, false);
                }
                if(input.tax) {
                    order.withTax(input.tax);
                }
                if(input.fee) {
                    order.withNonTaxedFees(input.fee);
                }
                order = order.split();
            });

            it(parserName+' should be good', () => {
                for(let [person, price] of order.totals) {
                    p = Math.round(price*100)/100;
                    expect(p).to.be.equal(expected[person]);
                }
            });
        });
    });
}
