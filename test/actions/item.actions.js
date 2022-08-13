const itemSelectors = require('../pageobjects/item.page')

module.exports = class ItemActions extends itemSelectors {

    async addProductToCart(){
        await (await this.addToCartButton).click()
    }
    async confirmProductAddedToCart(){
        //await utilActions.waitForAlertToBeDisplayed()
        return browser.getAlertText()
    }
}