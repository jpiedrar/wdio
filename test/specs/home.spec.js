const HomeActions = require('../actions/home.actions')
var assert = require('assert')

const homeActions = new HomeActions()

describe ('Home Page', () => {
    it ('Should login a user | Regression, Smoke, Sanity', async function () {
        await homeActions.navigate()
        await homeActions.clickLoginButton()
        await homeActions.waitForLoginModalToAppear()
        await homeActions.fillLoginForm('tu001', 'asdf')
        await homeActions.clickLoginModalButton()
        await expect(await homeActions.getWelcomeLoggedUsername('tu001')).toExist()
        assert.equal(await homeActions.getWelcomeLoggedUsername('tu001').isExisting(), true)
    })
    it ('Should not login with an invalid password | Regression, Smoke, Sanity', async function () {
        await homeActions.navigate()
        await homeActions.login('tu001', 'invalidPassword')
        assert.equal(await homeActions.getContactAlertMessage(), 'Wrong password.')
    })
    it ('Should send messages through contact modal | Regression, Smoke', async function () {
        await homeActions.navigate()
        await homeActions.clickContactButton()
        assert.equal(await (homeActions.contactModal).isExisting(), true)
        await homeActions.fillContactForm('testContactEmail', 'testContactName', 'This is a test message, please ignore')
        await homeActions.clickSendMessageButton()
        assert.equal(await homeActions.getContactAlertMessage(), 'Thanks for the message!!')
    })
    it ('Should not register duplicated username | Regression', async function() {
        await homeActions.navigate()
        await homeActions.clickSignUpButton()
        await expect(await homeActions.signUpModal).toExist()
        await homeActions.fillSignInForm('tu001', 'asdfg')
        await homeActions.clickSignUpModalSignUpButton()
        assert.equal(await homeActions.getContactAlertMessage(), 'This user already exist.')
    })
})