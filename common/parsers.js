(function() {
    const Order = require('./order.js');

    class OrderUpHtmlParser {
        parse(containerElement) {

            var highlight = element => {
                element.style.background = 'repeating-linear-gradient(45deg, yellow, yellow 10px, #fafa0a 10px, #fafa0a 20px )';
                element.title = 'OrderSplitter is using this value';
            };

            var untaxedFees = 0, tip, tax, people;

            var summaryTable = Array.from(containerElement.querySelectorAll('#order-confirmation-page tr'));
            if (summaryTable) {
                [people] = summaryTable.map(tr => Array.from(tr.querySelectorAll('td'))).filter(tds => tds.length).reduce(function([people, lastItemCost], [left_td, center_td, right_td]) {
                    let name, price;

                    if (right_td && right_td.classList.contains('price-table')) {
                        price = right_td.innerText;
                        highlight(right_td);
                        lastItemCost = Number(price.match('\\$([0-9.]+)')[1]);
                    }

                    if (center_td && (name = center_td.querySelector('li:last-child strong'))) {
                        highlight(name);
                        name = name.innerText;
                        people[name] = people[name] || 0;
                        people[name] += lastItemCost;
                        lastItemCost = null;
                    }

                    return [people, lastItemCost];
                }, [{}, null]);
            }

            var infoTable = Array.from(containerElement.querySelectorAll('div.order-information tr'));
            if (infoTable) {
                infoTable.map(tr => Array.from(tr.querySelectorAll('td'))).filter(tds => tds.length).forEach(function([left, right]) {

                    let match = right.textContent.match('\\$([0-9.]+)');
                    var value = match && Number(match[1]);

                    switch (left.textContent.trim()) {
                        case 'Sales Tax':
                            tax = value;
                            highlight(right);
                            break;
                        case 'Processing Fee':
                        case 'Delivery Fee':
                            untaxedFees += value;
                            highlight(right);
                            break;
                        case 'Tip':
                            tip = value;
                            highlight(right);
                            break;
                    }
                });
            }
            return Order.split({people, untaxedFees, tip, tax});
        }
    }

    class QueryStringParser {

        /**
         * Parses input from a URL query string into an Order.
         * @example
         * parse('tax=0.30&fee=1.50&tip=1.25&Gus=5.00');
         * @param {string} queryString - The URL query string
         * @returns {Order} An order parsed from the URL query string
         */
        parse(queryString) {
            if (!location.search.length) {
                return undefined;
            }
            var params = location.search.slice(1).split('&');
            console.debug('params', params);

            let people={}, untaxedFees, tax, tip;

            params.map(param=>param.split('=')).forEach(function([key,value]) {
                key = decodeURIComponent(key);
                value = Number(decodeURIComponent(value));
                switch (key) {
                    case 'fee':
                        untaxedFees = value;
                        break;
                    case 'tax':
                        tax = value;
                        break;
                    case 'tip':
                        tip = value;
                        break;
                    default:
                        people[key] = value;
                }
            });

            return Order.split({people, untaxedFees, tax, tip});
        }
    }

    class OrderUpParser {

        /**
         * Parses the confirmation summary from an OrderUp.com order
         * @param {Element} elementOrText - The element containing the confirmation summary from OrderUp.com, or the text itself
         * @param {number} fee
         * @param {number} tax
         * @param {number} tip - The tip (either a fixed value or percentage)
         * @param {boolean} isTipPercentage - True if the tip is a percentage as opposed to a fixed value
         * @return {Order} An order parsed from the OrderUp.com confirmation summary
         */
        parse(elementOrText, fee=0, tax=0, tip=0, isTipPercentage=false) {
            let orderUpText = elementOrText.innerText || elementOrText;
            let order = new Order()
                .withNonTaxedFees(fee)
                .withTax(tax)
                .withTip(tip, isTipPercentage);

            var lines = orderUpText.split('\n');

            lines.reduce((lastItemCost, line) => {
                let itemCostMatch, nameMatch;

                if(!lastItemCost) {
                    if (itemCostMatch = line.match('.*\\$([0-9.]+)')) {
                        let itemCost = Number(itemCostMatch[1]);
                        return itemCost;
                    }
                }

                if (nameMatch = line.match('.*Label for:(.*)')) {
                    let name = nameMatch[1];
                    order.withPerson(name, lastItemCost);
                    return;
                }

                return lastItemCost;
            }, null);

            return order;
        }
    }

    class CsvParser {
        parse(element) {
            let orderParams = element.innerText.split('\n')
                .map(line => line.trim())
                .filter(line => !!line)
                .reduce((orderParams, line) => {
                    let [name, ...priceStrings] = line.split(',');
                    let price = priceStrings.map(priceStr => parseInt(priceStr)).filter(price => !isNaN(price)).reduce((price,sum) => price+sum, 0);
                    switch (name) {
                        case 'fee':
                            orderParams.untaxedFees = orderParams.untaxedFees || 0;
                            orderParams.untaxedFees += price;
                        case 'tax':
                            orderParams.tax = orderParams.tax || 0;
                            orderParams.tax += price;
                        case 'tip':
                            orderParams.tip = orderParams.tip || 0;
                            orderParams.tip += price;
                        default:
                            orderParams.people[name] = orderParams.people[name] || 0;
                            orderParams.people[name] += price;
                    }
                    return orderParams;
                }, {people: {}});

            return Order.split(orderParams);
        }
    }
    module.exports = {
        OrderUpParser,
        QueryStringParser,
        CsvParser,
        OrderUpHtmlParser,
        getUserInputParsers() {
            return [CsvParser, OrderUpHtmlParser];
        }
    };
})();
