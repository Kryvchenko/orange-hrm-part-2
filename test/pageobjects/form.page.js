const utils = require('../../utils/utils');
const constans = require('../../constants/constants');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FormPage extends Page {
    /**
     * define selectors using getter methods
     */
    get adminButton () {
        return $('ul > li:nth-child(1) > a');
    }
    get jobButton() {
        return $('//header/div[2]/nav/ul/li[2]');
    }
    get jobDropDownButton() {
        return $('nav > ul ul > li:nth-child(1) > a');
    }
    get addJobButton() {
        return $('//div/div/div[1]/div/button');
    }
    get jobTitleInput() {
        return $('//form/div[1]/div/div[2]/input');
    }
    get jobDescriptionInput() {
        return $('div:nth-child(2) > textarea');
    }
    get jobNoteInput() {
        return $('//form/div[4]/div/div[2]/textarea');
    }
    get saveNewJobButton() {
        return $('.oxd-button--secondary.orangehrm-left-space');
    }

    async navigateToAddJobSection() {
      await utils.doClick(this.adminButton);
    }
    async selectJobDropDown() {
       await utils.doClick(this.jobButton);
       await utils.doClick(this.jobDropDownButton);
       await utils.doClick(this.addJobButton);
    }
    async fillUpJobFrom() {
        await utils.doSetValue(this.jobTitleInput, constans.JOB_TITLE);
        await utils.doSetValue(this.jobDescriptionInput, constans.JOB_DESCRIPTION);
        await utils.doSetValue(this.jobNoteInput, constans.JOB_NOTE);
        await utils.doClick(this.saveNewJobButton);
    }
    async getInputText() {
      const value =  await utils.doGetValue(this.jobDescriptionInput);
      return value;
    }
}

module.exports = new FormPage();
