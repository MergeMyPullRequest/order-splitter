function defineCustomElement(tag, elementClass) {
    customElements.define(tag, class extends elementClass {
        static get is() { return tag; }
    });
}

var Utils = {
    /**
     * @param {number} number to be formatted
     * @return {string} undefined if param is not a number
     */
    _formatUSD(number) {
        if (typeof number !== 'number') {
            return;
        }
        return number.toLocaleString('en', {style: 'currency', currency: 'USD', useGrouping: true});
    }
};
