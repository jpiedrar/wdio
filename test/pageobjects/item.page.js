module.exports = class item {
    get addToCartButton() { return $('//a[@onclick=\'addToCart(1)\']') }
}