const HomeActions = require('../actions/home.actions')

const homeActions = new HomeActions()

describe ('Home Page', () => {
    it ('Should login a user', async function () {
        await homeActions.navigate()
        await homeActions.clickLoginButton()
        await homeActions.waitForLoginModalToAppear()
        await homeActions.fillLoginForm('tu001', 'asdf')
        await homeActions.clickLoginModalButton()
        await expect(await homeActions.getWelcomeLoggedUsername('tu001')).toExist()
    })
})