const utils = require('../../utils/utils');
const constans = require('../../constants/constants');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[placeholder="Username"]');
    }

    get inputPassword () {
        return $('input[placeholder="Password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await utils.doSetValue(this.inputUsername, constans.USER_NAME)
        await utils.doSetValue(this.inputPassword, constans.USER_PASSWORD)
        await utils.doClick(this.btnSubmit);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
