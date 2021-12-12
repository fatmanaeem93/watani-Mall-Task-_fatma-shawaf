import { AllCategoryPageItems } from "../all category/item";
export class AllCategoryPageActions {
    constructor() {
        this.items = new AllCategoryPageItems();
    }
    clickallCategoryNav() {
        this.items.allCategoryNav()
            .click({ force: true })
    }
    clickmenitorSection() {
        this.items.menitorSection()
            .click({ force: true })
    }
    clickmanufacturerMenu() {
        this.items.manufacturerMenu()
            .click({ force: true })
    }
    sortFromDownToUpOption(){
        this.items.sortFromDownToUpOption()
        .select('price', { force: true })
    }
    clickAddCartButton(){
        this.items.addCartButton().trigger('mouseover', 'center').find('.btn-add-cart').click({ force: true })
    }
  
}