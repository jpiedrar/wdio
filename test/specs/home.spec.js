const HomeActions = require('../actions/home.actions')

const homeActions = new HomeActions()

describe ('Home Page', () => {
    it ('Should login a user', async function() {
        homeActions.navigate()
        homeActions.clickLoginButton()
        homeActions.fillLoginForm('tu001', 'asdf')
        homeActions.clickLoginModalButton()
    })
})