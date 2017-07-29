class Order {
    static split(config) {
        return new Order(config).split();
    }
    constructor(config = {tip: 0, tax: 0, untaxedFees: 0, taxedFees: 0, isTipPercentage: false, people: {}}) {

        if (config.taxedFees) {
            console.warn('Taxed fees have not been tested and probably don\'t work. I was contemplating removing this feature.');
        }

        // validation
        {
            var defaults = {
                'isTipPercentage': false,
                'untaxedFees':     0,
                'people':          {},
                'tax':             0,
                'taxedFees':       0,
                'tip':             0,
            };
            var typeValidationMap = {
                'isTipPercentage': 'boolean',
                'untaxedFees':     'number',
                'people':          'object',
                'tax':             'number',
                'taxedFees':       'number',
                'tip':             'number'
            };

            Object.entries(defaults).forEach(function([key, default0]) {
                config[key] = config[key] || default0;
            });

            Object.entries(config).forEach(function([key, value]) {
                var expectedType = typeValidationMap[key];
                if (!expectedType) {
                    throw new Error(`Unexpected key ${key}`);
                }
                if (typeof value !== expectedType) {
                    throw new Error(`config.${key} must be of type ${expectedType}`);
                }
                delete typeValidationMap[key];
            });
            Object.keys(typeValidationMap).forEach(key => {
                throw new Error(`Missing key ${key}`);
            });
            Object.values(config.people).forEach(personCost => {
                if (typeof personCost !== 'number') {
                    throw new Error('config.people\'s values must be numbers');
                }
            });
        }

        // convert object to Map
        config.people = Object.entries(config.people).reduce((map, [key, value]) => map.set(key, value), new Map());

        Object.assign(this, config);
    }

    withTip(tip, asPercentage=false) {
        console.warn('withTip() is deprecated');
        this.isTipPercentage = asPercentage;
        this.tip = tip;
        this.isTipPercentage = asPercentage;
        return this;
    }

    withNonTaxedFees(...fees) {
        console.warn("withNonTaxedFees() is deprecated");
        this.untaxedFees = fees.reduce((acc, val) => acc+val);
        return this;
    }

    withTaxedFees(...fees) {
        console.warn("withTaxedFees() is deprecated");
        this.taxedFees = fees.reduce((acc, val) => acc+val);
        return this;
    }

    withTax(tax) {
        console.warn("withTax() is deprecated");
        this.tax = tax;
        return this;
    }

    withPerson(name, price) {
        console.warn("withPerson() is deprecated");
        let newPrice = price;
        if(this.people.has(name)) {
            newPrice += this.people.get(name);
        }
        this.people.set(name, newPrice);
        return this;
    }

    get taxPercent() {
        if(this.subTotal === 0) {
            return 0;
        }
        return this.tax/this.subTotal;
    }

    get taxPercentDisplay() {
        return this.taxPercent*100;
    }

    get fee() {
        return this.untaxedFees;
    }

    get tipPercent() {
        if(this.isTipPercentage) {
            return this.tip;
        } else {
            if(this.subTotal === 0) {
                return 0;
            }
            return this.tipDollars / this.subTotal;
        }
    }

    get tipDollars() {
        if (this.isTipPercentage) {
            return this.tipPercent * this.subTotal;
        } else {
            return this.tip;
        }
    }

    get feesPerPerson() {
        if (!this.hasPeople) return {};
        var subtotal = Array.from(this.people.values()).reduce((a,b)=>a+b);
        return Array.from(this.people.entries()).reduce((feesPerPerson, [name, price]) => {
            feesPerPerson[name] = price/subtotal*this.untaxedFees;
            return feesPerPerson;
        }, {});
    }

    get total() {
        return this.subTotal + this.fee + this.tipDollars + this.tax;
    }

    get hasPeople() {
        return !!Array.from(this.people.values()).length;
    }

    split() {

        this.totals = new Map();
        if (!this.hasPeople) {
            this.subTotal, this.totalPrice = 0;
            return this;
        }
        this.subTotal = Array.from(this.people.values()).reduce((sum, value) => sum+value);
        this.subTotal += this.taxedFees;

        for (let [name, price] of this.people.entries()) {
            let totalForPerson = price;
            totalForPerson += price * this.taxPercent;
            totalForPerson += price * this.tipPercent;
            totalForPerson += this.feesPerPerson[name];
            this.totals.set(name, totalForPerson);
        }
        let totalPrice = Array.from(this.totals.values()).reduce((acc, val) => acc+val);
        if(Math.round(totalPrice*100) != Math.round(this.total*100)) {
            throw new Error('Everyone\'s share does not add up to total');
        }
        return this;
    }

    // not used. we should delete this
    toJSON() {
        let ret = {};
        ret.people = Array.from(this.people);
        ret.tipDollars = this.tipDollars;
        ret.tax = this.tax;
        ret.untaxedFees = this.untaxedFees;
        ret.taxedFees = this.taxedFees;
        ret.isTipPercentage = this.isTipPercentage;
        return ret;
    }
    
    // not used. we should delete this
    static fromJSON(json) {
        let order = new Order();
        order.people = new Map(json.people);
        order.withTip(json.tipDollars, false)
            .withTax(json.tax)
            .withNonTaxedFees(json.untaxedFees)
            .withTaxedFees(json.taxedFees);
        return order.split();
    }
}
module.exports = Order;
