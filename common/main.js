/**
 * @param {number} number to be formatted
 * @return {string} undefined if param is not a number
 */
export function formatUSD(number) {
    if (typeof number !== 'number') {
        return;
    }
    return number.toLocaleString('en', {style: 'currency', currency: 'USD', useGrouping: true});
}
