module.exports = class item {
    get addToCartButton() { return $('//a[@onclick=\'addToCart(1)\']') }
    get itemPicture() { return $('#imgp') }
    get itemTitle() { return $('#tbodyid>h2') }
    get itemPrice() { return $('#tbodyid>h3')}
    get itemDescription() { return $('#myTabContent')}
}