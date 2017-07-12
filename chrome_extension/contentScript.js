const Order = require('../common/order.js');
const Parsers = require('../common/parsers.js');

chrome.storage.onChanged.addListener((changes, namespace) => {
    if(namespace !== "local") {
        return;
    }
    if(changes.parseOrderBitch) {
        sendOrder();
    }
});
sendOrder();

function sendOrder() {
    let order = new Parsers.OrderUpHtmlParser().parse(document.body);
    chrome.storage.local.set({"order": JSON.stringify(order)});
}
