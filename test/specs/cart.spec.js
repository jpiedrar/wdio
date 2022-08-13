const HomeActions = require('../actions/home.actions')
const ItemActions = require('../actions/item.actions')
const CartActions = require('../actions/cart.actions')
const UtilsActions = require('../actions/util.actions')
var assert = require('assert')
const exp = require('constants')

const utilsActions = new UtilsActions()
const homeActions = new HomeActions()
const itemActions = new ItemActions()
const cartActions = new CartActions()

describe ('Cart Page', () => {
    it ('Should make purchasesin guest mode', async function () {
        await homeActions.navigate()
        await homeActions.navigateToItemPage()
        await itemActions.addProductToCart()
        await utilsActions.waitForAlertToBeDisplayed()
        assert.equal(await itemActions.confirmProductAddedToCart(), 'Product added')
        await browser.acceptAlert()
        await homeActions.navigateToCartPage()
        await cartActions.validateTotalLabel()
        await cartActions.validateItemsInCart()
        expect(await cartActions.itemRows).toExist()
        await cartActions.clickPlaceOrderButton()
        expect(await cartActions.placeOrderModal).toExist()
        await cartActions.fillPlaceOrderForm('testName', 'testCountry', 'testCity', 'testCreditCard', 'testMonth', 'testYear')
        await cartActions.clickPlaceOrderModalPurchaseButton()
        await cartActions.waitForSuccessMessageToAppear()
        expect(await cartActions.successPurchaseModal).toExist()
        assert.equal(await cartActions.successPurchaseModal.isExisting(), true)
    })
    it ('Should make purchases with user logged in', async function () {
        await homeActions.navigate()
        await homeActions.login('tu001', 'asdf')
        await homeActions.navigateToItemPage()
        await itemActions.addProductToCart()
        await utilsActions.waitForAlertToBeDisplayed()
        assert.equal(await itemActions.confirmProductAddedToCart(), 'Product added')
        await browser.acceptAlert()
        await homeActions.navigateToCartPage()
        await cartActions.validateTotalLabel()
        await cartActions.validateItemsInCart()
        expect(await cartActions.itemRows).toExist()
        await cartActions.clickPlaceOrderButton()
        expect(await cartActions.placeOrderModal).toExist()
        await cartActions.fillPlaceOrderForm('testName', 'testCountry', 'testCity', 'testCreditCard', 'testMonth', 'testYear')
        await cartActions.clickPlaceOrderModalPurchaseButton()
        await cartActions.waitForSuccessMessageToAppear()
        expect(await cartActions.successPurchaseModal).toExist()
        assert.equal(await cartActions.successPurchaseModal.isExisting(), true)
    })
    it ('Should add products to the cart', async function(){
        await homeActions.navigate()
        await homeActions.navigateToItemPage()
        await itemActions.addProductToCart()
        await utilsActions.waitForAlertToBeDisplayed()
        assert.equal(await itemActions.confirmProductAddedToCart(), 'Product added')
        await browser.acceptAlert()
        await homeActions.navigateToCartPage()
        await cartActions.validateTotalLabel()
        await cartActions.validateItemsInCart()
        assert.equal(await cartActions.itemList.isExisting(), true)
        assert.equal(await cartActions.itemRows.isExisting(), true)
    })
})