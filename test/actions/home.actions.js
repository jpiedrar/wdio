const homeSelectors = require('../pageobjects/home.page')
const UtilActions = require('../actions/util.actions')

const utilActions = new UtilActions()

module.exports = class HomeActions extends homeSelectors {
    async navigate(){
        browser.url('www.demoblaze.com')
        browser.maximizeWindow()
    }
    async navigateToItemPage(){
        await (await this.itemsTitles).click()
    }
    async navigateToCartPage(){
        await (await this.headerCartButton).click()
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
    async waitForLoginModalToAppear(){
        await ( await utilActions.waitForElementToBeDisplayed(this.loginModal))
    }
    async login(username, password){
        await this.clickLoginButton()
        await this.fillLoginForm(username, password)
        await this.clickLoginModalButton()
    }
    async clickContactButton(){
        await (await this.headerContactButton).click()
    }
    async fillContactForm(email, name, message){
        await (this.contactModalContactEmailInput).setValue(email)
        await (this.contactModalContactNameInput).setValue(name)
        await (this.contactModalContactMessageInput).setValue(message)
    }
    async clickSendMessageButton(){
        await (this.contactModalSendMessageButton).click()
    }
    async getContactAlertMessage(){
        await utilActions.waitForAlertToBeDisplayed()
        return browser.getAlertText()
    }
    async clickSignUpButton(){
        await (await this.headerSignUpButton).click()
    }
    async fillSignInForm(username, password){
        await (this.signUpModalUsernameInput).setValue(username)
        await (this.signUpModalPasswordInput).setValue(password)
    }
    async clickSignUpModalSignUpButton(){
        await (await this.signUpModalSignUpButton).click()
    }
    
}