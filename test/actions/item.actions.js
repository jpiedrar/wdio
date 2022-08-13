const itemSelectors = require('../pageobjects/item.page')
const UtilActions = require('../actions/util.actions')

const utilActions = new UtilActions()

module.exports = class ItemActions extends itemSelectors {

    async addProductToCart(){
        await (await this.addToCartButton).click()
    }
    async confirmProductAddedToCart(){
        await utilActions.waitForAlertToBeDisplayed()
        return browser.getAlertText()
    }
}