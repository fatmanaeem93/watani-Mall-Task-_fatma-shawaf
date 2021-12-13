import { AllCategoryPageItems } from "../all category/item";
export class AllCategoryPageTests {
  constructor() {
    this.items = new AllCategoryPageItems();
   
  } 
   product_name=""
  checkAllCategoryNavClicked() {
    return cy.url().should("contain", "/all-categories")

  }
  checkmenitorSectionClicked() {
    return cy.url().should("contain", "/product-category/monitors")

  }
  checkmanufacturerMenuClicked() {
    return cy.url().should("contain", "https://watanimall.com/product-category/monitors?_manufacturer=asus")

  }
  checkShoppingcounterValue() {
    return this.items.shoppingcounter().should('have.text', '0')
  }
  checkPriceSelectVisible(){
    return this.items.priceSelect().should('be.visible');
  }
  checkValueOfpriceSelection(){
    return  this.items.sortFromDownToUpOption().should('have.value', 'price')
  }
  checkallProductListSortedFromDownToUpSoretd(){
    this.items.productListSortedFromDownToUp().then(ele => {
         const unsorted = ele.map((index, el) =>  Cypress.$(el).text().substr(1).trim().replace(/,/g, '')).get();
         const sorted = unsorted.slice().sort((a, b) => parseFloat(a) - parseFloat(b));
         expect(sorted, 'Items are sorted').to.deep.equal(unsorted);
     });
  }
  StoreProductName(){
    return this.items.productName().then((el) => {
      cy.wrap(el.text()).as('product_name')
  })
  }
  StoreProductPrice(){
    return this.items.productPrice().then((el) => {
      cy.wrap(el.text()).as('product_price1')
  })
  }
  shoppingCartShowed(){
    return this.items.shoppingCart().should("be.visible")
  }
  lenghtofcartShopping(){
    return this.items.lenghtOfShoppingCartItem().should("have.length", "1")
  }
  checkedAddedtheSameProductNameToCart(){
    return this.items.productNameOfShoppingCart().should("contain", this.product_name.trim().slice(1, 10))
  }
  checkedAddedtheSameProductPriceToCart(){
    return this.items.productPriceOfShoppingCart().should("contain", this.product_price1)
  }


}