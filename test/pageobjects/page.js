const constans = require('../../constants/constants');

module.exports = class Page {
   
    open () {
        return browser.url(constans.URL);
    }
}
