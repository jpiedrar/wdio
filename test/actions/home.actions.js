const homeSelectors = require('../pageobjects/home.page')

module.exports = class HomeActions extends homeSelectors {
    async navigate(){
        browser.url('www.demoblaze.com')
    }
    async clickLoginButton(){
        await (await this.loginButton).click()
    }
    async fillLoginForm(username, password){
        await ( await this.usernameInput).setValue(username)
        await ( await this.passwordInput).setValue(password)
    }
    async clickLoginModalButton(){
        await ( await this.loginModalButton).click()
    }

}