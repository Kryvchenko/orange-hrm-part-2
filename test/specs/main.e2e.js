const LoginPage = require('../pageobjects/login.page');
const FormPage = require('../pageobjects/form.page');
const GridPage = require('../pageobjects/grid.page');
const ChangePage = require('../pageobjects/change.page');
const DeletePage = require('../pageobjects/delete.page');
const constans = require('../../constants/constants');


describe('Log in to the site with the credentials', () => {
    before( async () => {
        await browser.deleteCookies();
        await LoginPage.open();
        await LoginPage.login();
        await expect(browser).toHaveUrlContaining(constans.USER_PAGE_PATH)
    });
    it('should allow to add new job via form', async () => {
        await FormPage.navigateToAddJobSection();
        await FormPage.selectJobDropDown();
        const jobButton = FormPage.jobButton;
        await expect(jobButton).toBeDisplayed();
    });
    it('should allow to complete add new job form', async () => {
        await FormPage.fillUpJobFrom();
        const inputText = await FormPage.getInputText();
        await expect(inputText).toContain(constans.JOB_DESCRIPTION);
    });
    it('should find newly added job in the grid', async () => {
        const jobInGrid = await GridPage.jobTitleInTheGrid;
        await expect(jobInGrid).toBeExisting();
    });
    it('should change a job description', async () => {
        await GridPage.editNewlyAddedJob();
        await ChangePage.clearInputValue();
        const updatedDescription = await ChangePage.editJobDescription();
        await expect(updatedDescription).toContain(constans.NEW_JOB_DESCRIPTION);
    });
    it('should delete a new job', async () => {
        await DeletePage.deleteJob();
        await browser.pause(3000);
        const deletedJob = await GridPage.deletedJobInGrid;
        await expect(deletedJob).not.toBeExisting();
    });
});


