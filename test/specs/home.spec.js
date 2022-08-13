const HomeActions = require('../actions/home.actions')
var assert = require('assert')

const homeActions = new HomeActions()

describe ('Home Page', () => {
    it ('Should login a user', async function () {
        await homeActions.navigate()
        await homeActions.clickLoginButton()
        await homeActions.waitForLoginModalToAppear()
        await homeActions.fillLoginForm('tu001', 'asdf')
        await homeActions.clickLoginModalButton()
        await expect(await homeActions.getWelcomeLoggedUsername('tu001')).toExist()
        assert.equal(await homeActions.getWelcomeLoggedUsername('tu001').isExisting(), true)
    })
    it ('Should send messages through contact modal', async function () {
        await homeActions.navigate()
        await homeActions.clickContactButton()
        assert.equal(await (homeActions.contactModal).isExisting(), true)
        await homeActions.fillContactForm('testContactEmail', 'testContactName', 'This is a test message, please ignore')
        await homeActions.clickSendMessageButton()
        assert.equal(await homeActions.getContactAlertMessage(), 'Thanks for the message!!')
    })
})