class elementUtils  {
    async doClick(element) {
        await element.waitForDisplayed()
        return element.click()
     }

    async doSetValue(element, value) {
        await element.waitForDisplayed()
        return element.setValue(value)
     }
    async doClearValue(element) {
        await element.waitForDisplayed()
        return await element.clearValue()
    }
    async doGetText(element) {
        await element.waitForDisplayed()
        return  element.getText()
    }
    async doGetValue(element) {
        await element.waitForDisplayed()
        return element.getValue()
    }

    async doIsDisplayed (element) {
        await element.waitForDisplayed()
        return element.isDisplayed()
    }

    // async selectWithKeyboard () {
    //    await browser.keys(['Meta', 'a'])
    //    await browser.keys(['Meta', 'c'])
    // //    return await browser.keys(['Down arrow','Enter']); 
    // }
}

module.exports = new elementUtils();