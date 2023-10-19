module.exports = class Home {
    //header selectors
    get headerCartButton() { return $('//a[@href=\'cart.html\']') }
    get headerContactButton() { return $('//a[text()=\'Contact\']') }
    get headerSignUpButton() { return $('#signin2') }

    //buttons in general
    get loginButton() { return $('#login2') }
    get cartButton() { return $('#cartur') }
    get usernameInput() { return $('#loginusername') }
    get passwordInput() { return $('#loginpassword') }
    get loginModalButton() { return $('//button[text() = \'Log in\']') }
    get loginModal() { return $('#logInModal') }
    get itemsTitles() { return $('.card-block>h4') }
    async getSpecificItem(itemTitle) { return $(`//div[@class='card-block']/h4/a[text()='${itemTitle}']`) }
    async getWelcomeLoggedUsername(username) { return $(`//a[text() = 'Welcome ${username}']`) }

    //Contact Modal 
    get contactModal() { return $('#exampleModal') }
    get contactModalContactEmailInput() { return $('#recipient-email') }
    get contactModalContactNameInput() { return $('#recipient-name') }
    get contactModalContactMessageInput() { return $('#message-text') }
    get contactModalSendMessageButton() { return $('//button[text()=\'Send message\']') }

    //Sign Up Modal
    get signUpModal() { return $('#signInModal') }
    get signUpModalUsernameInput() { return $('#sign-username') }
    get signUpModalPasswordInput() { return $('#sign-password') }
    get signUpModalSignUpButton() { return $('//button[@onclick=\'register()\']') }
}