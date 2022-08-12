module.exports = class Home {
    get loginButton() { return $('#login2') }
    get cartButton() { return $('#cartur') }
    get usernameInput() { return $('#loginusername') }
    get passwordInput() { return $('#loginpassword') }
    get loginModalButton() { return $('//button[text() = \'Log in\']') }
}