module.exports = class Home {
    //header selectors
    get headerCartButton() { return $('//a[@href=\'cart.html\']')}

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
}