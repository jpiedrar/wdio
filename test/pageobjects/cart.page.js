module.exports = class item {
    get itemList() { return $('#tbodyid') }
    get itemRows() { return $$('#tbodyid>tr') }
    get totalLabel() { return $('//h2[text()=\'Total\']') }
    get placeOrderButton() { return $('//button[text()=\'Place Order\']') }
    get placeOrderModal() { return $('#orderModal') }
    get placeOrderModalInputName() { return $('#name') }
    get placeOrderModalInputCountry() { return $('#country') }
    get placeOrderModalInputCity() { return $('#city') }
    get placeOrderModalInputCreditCard() { return $('#card') }
    get placeOrderModalInputMonth() { return $('#month') }
    get placeOrderModalInputYear() { return $('#year') }
    get placeOrderModalPurchaseButton() { return $('//button[@onclick=\'purchaseOrder()\']') } 
    get successPurchaseModal() { return $('//button[text()=\'Purchase\']')}
    get successPurchaseModalText() { return $('//div[contains(@class,\'sweet-alert\')]/h2') }
    get successPurchaseModalOKButton() { return $('//button[text()=\'OK\']') }
}