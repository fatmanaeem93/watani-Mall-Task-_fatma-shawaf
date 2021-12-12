export class AllCategoryPageItems {
    constructor() { }
    allCategoryNav() {
        return cy.get("#nav a[href='https://watanimall.com/all-categories']")

    }
    shoppingcounter() {
        return cy.get(".mini_cart_control .counter")
    }
    menitorSection() {
        return cy.get("#main a[href='https://watanimall.com/product-category/monitors']")

    }
    manufacturerMenu() {
        return cy.get('[data-value="asus"]')
    }
    priceSelect(){
        return  cy.get('div.sort-wrapper form span.jcf-select-orderby');
    }
    sortFromDownToUpOption(){
        return cy.get("select[name='orderby']")
    }
    productListSortedFromDownToUp(){
        return cy.get('div.products-row div.product-col div.product-price').children().not('del').find('bdi')
    }
    addCartButton(){
        return cy.get('.products-row > :nth-child(1)')
    }
    productName(){
        return cy.get('.products-row > :nth-child(1) .product-name')
    }
    productPrice(){
        return  cy.get('.products-row > :nth-child(1) div.product-price').children().not('del').find('bdi')
    }
    shoppingCart(){
        return  cy.get('.header-mini-cart')
    }
    lenghtOfShoppingCartItem(){
        return  cy.get('div.mini-cart-body .cart-item')
    }
    productNameOfShoppingCart(){
        return cy.get(".mini-cart-items .product-name a").first()
    }
    productPriceOfShoppingCart(){
        return cy.get('.product-amount > .woocommerce-Price-amount > bdi')
    }
}