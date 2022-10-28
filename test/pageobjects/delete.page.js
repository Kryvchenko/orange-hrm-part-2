const utils = require('../../utils/utils');
const constans = require('../../constants/constants');
const Page = require('./page');

class DeletePage extends Page {
    get deleteButton() {
        return $(`//div[text()='${constans.NEW_JOB_DESCRIPTION}']/ancestor::div[@class="oxd-table-card"]//button[1]`)
    }
    get modalButton() {
        return $('.oxd-button--label-danger.orangehrm-button-margin');
    }
    get deletedJobInGrid() {
        return $(`//div[text()='${constans.NEW_JOB_DESCRIPTION}']`);
     }
    async deleteJob() {
        await utils.doClick(this.deleteButton);
        await utils.doClick(this.modalButton);
    }
}

module.exports = new DeletePage();
