const utils = require('../../utils/utils');
const constans = require('../../constants/constants');
const Page = require('./page');

class ChangePage extends Page {
    get jobDescriptionInput() {
        return $('//form/div[2]/div/div[2]/textarea');
    }
    get saveNewJobButton() {
        return $('.oxd-button--secondary.orangehrm-left-space');
    }

    async clearInputValue() {
        const inputField = await this.jobDescriptionInput;
        await inputField.click();
        await browser.execute((s) => {
          s.value = null;
        }, inputField);
      }
    async editJobDescription() {
        await utils.doSetValue(this.jobDescriptionInput, constans.NEW_JOB_DESCRIPTION);
        const inputText =  await utils.doGetValue(this.jobDescriptionInput);
        await utils.doClick(this.saveNewJobButton);
        return inputText;
    }
}

module.exports = new ChangePage();
