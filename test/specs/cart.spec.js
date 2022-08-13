const HomeActions = require('../actions/home.actions')
const ItemActions = require('../actions/item.actions')
const CartActions = require('../actions/cart.actions')
var assert = require('assert')
const exp = require('constants')

const homeActions = new HomeActions()
const itemActions = new ItemActions()
const cartActions = new CartActions()

describe ('Cart Page', () => {
    it ('Should add products to cart', async function () {
        await homeActions.navigate()
        //await homeActions.login('tu001', 'asdf')
        await homeActions.navigateToItemPage()
        await itemActions.addProductToCart()
        await browser.pause(1000) //TODO: add a waitForAlert() capability
        assert.equal(await itemActions.confirmProductAddedToCart(), 'Product added')
        await browser.acceptAlert()
        await homeActions.navigateToCartPage()
        await cartActions.validateTotalLabel()
        await cartActions.validateItemsInCart()
        expect(await cartActions.itemRows).toExist()
        await cartActions.clickPlaceOrderButton()
        expect(await cartActions.placeOrderModal).toExist()
        await cartActions.fillPlaceOrderForm('testName', 'testCountry', 'testCity', 'testCreditCard', 'testMonth', 'testYear')
        
    })
})