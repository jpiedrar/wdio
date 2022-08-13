const CartSelectors = require('../pageobjects/cart.page')
const UtilActions = require('../actions/util.actions')

const utilActions = new UtilActions()

module.exports = class ItemActions extends CartSelectors {
    async validateItemsInCart(){
        utilActions.waitForAlertToBeDisplayed(this.itemList)
    }
    async validateTotalLabel(){
        utilActions.waitForAlertToBeDisplayed(this.totalLabel)
    }
    async clickPlaceOrderButton(){
        await (this.placeOrderButton).click()
    }
    async fillPlaceOrderForm(name, country, city, card, month, year){
        await (this.placeOrderModalInputName).setValue(name)
        await (this.placeOrderModalInputCountry).setValue(country)
        await (this.placeOrderModalInputCity).setValue(city)
        await (this.placeOrderModalInputCreditCard).setValue(card)
        await (this.placeOrderModalInputMonth).setValue(month)
        await (this.placeOrderModalInputYear).setValue(year)
    }
    async clickPlaceOrderModalPurchaseButton(){
        await (this.placeOrderModalPurchaseButton).click()
    }
    async waitForSuccessMessageToAppear(){
        utilActions.waitForElementToBeDisplayed(this.successPurchaseModal)
    }
    async validateSuccessMessage(card, name){
        sucessText = await this.successPurchaseModalText.getText()
        console.warn('AQUI SE IMPRIMIÓ ALGO', sucessText)
        //cardText = 'Card Number: ' + card
        //nameText = 'Name: ' + name
        if (sucessText.includes(card) && sucessText.includes(name)){
            return true
        }
        else {
            return false
        }
    }
}