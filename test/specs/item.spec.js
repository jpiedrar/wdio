const ItemActions = require('../actions/item.actions')
const HomeActions = require('../actions/home.actions')
var assert = require('assert')

const itemActions = new ItemActions()
const homeActions = new HomeActions()

describe ('Item Page', () => {
    it ('Should display all item information elements | Regression', async function () {
        await homeActions.navigate()
        await homeActions.navigateToItemPage()
        assert.equal(await itemActions.itemDescription.isExisting(), true)
    })
})