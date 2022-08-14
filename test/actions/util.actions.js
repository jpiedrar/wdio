const EC = require('wdio-wait-for')

module.exports = class utils {
    async waitForElementToBeDisplayed(element, timeout = 2000) {
        try {
            return await element.waitForDisplayed({ timeout: timeout })
        } catch {
            return false
        }
    }
    async waitForAlertToBeDisplayed(timeout = 2000) {
        browser.waitUntil(EC.alertIsPresent(), { timeout:timeout })
    }
    async getAlertMessage(){
        await utilActions.waitForAlertToBeDisplayed()
        return browser.getAlertText()
    }
}