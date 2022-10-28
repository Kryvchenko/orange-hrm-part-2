const utils = require('../../utils/utils');
const constans = require('../../constants/constants');
const Page = require('./page');

class GridPage extends Page {
    
    get jobTitleInTheGrid() {
        return $(`//div[text()='${constans.JOB_TITLE}']`);
     }
    get jobEditButton() {
       return $(`//div[text()='${constans.JOB_TITLE}']/ancestor::div[@class="oxd-table-card"]//button[2]`)
    }
    async editNewlyAddedJob() {
        await utils.doClick(this.jobEditButton);
    }
}

module.exports = new GridPage();
