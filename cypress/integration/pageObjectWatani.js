import { AllCategoryPageActions } from "../pageObject/all category/actions"
import { AllCategoryPageTests } from "../pageObject/all category/tests"
describe('add and delete monitor product', () => {
    let product_name = ""
    let categoryActions = new AllCategoryPageActions()
    let categoryTests = new AllCategoryPageTests()
    beforeEach(() => {
        // Preserve cookie in every test
        Cypress.Cookies.defaults({
            preserve: (cookie) => {
                return true;
            }
        })
    });
    before(() => {
        cy.visit('/')
    })
    beforeEach(()=>{
        // categoryTests.StoreProductPrice()
        // categoryTests.StoreProductName()
    })

    context('Filltering Monitor Product', () => {
        let categoryActions = new AllCategoryPageActions()
        let categoryTests = new AllCategoryPageTests()
        it('Verify clicking on all category tab', () => {
            categoryActions.clickallCategoryNav()
            categoryTests.checkAllCategoryNavClicked()
        });
        it('Verify shopping counter have 0 value', () => {
            categoryTests.checkShoppingcounterValue()
        })
        it('Verify clicking on Menitor Section', () => {
            categoryActions.clickmenitorSection()
            categoryTests.checkmenitorSectionClicked()
        });
        it('Verify clicking on asus from manufacturer menu', () => {
            categoryActions.clickmanufacturerMenu()
            categoryTests.checkmanufacturerMenuClicked()
        });
        it('Verify price select visible', () => {
            categoryTests.checkPriceSelectVisible()
            });
        it('Verify Sorting', () => {
            let url ="https://watanimall.com/product-category/monitors?orderby=price&_manufacturer=asus"
            cy.intercept('POST', url).as('Request');
            categoryActions.sortFromDownToUpOption()
            categoryTests.checkValueOfpriceSelection()
            cy.wait('@Request');
        });
        it('verify product list sorted from down to up', () => {
                categoryTests.checkallProductListSortedFromDownToUpSoretd()
        });
    })
    context("Adding monitor with lowest price",()=>{
        it('Verify hovering and clicking on add to cart button', () => {
            categoryActions.clickAddCartButton()
            categoryTests.StoreProductName()
            categoryTests.StoreProductPrice()
        });
        it('Verify shopping cart show', () => {
           categoryTests.shoppingCartShowed()
        });
        it('Verify the lenght of shopping cart item', () => {
          categoryTests.lenghtofcartShopping()
        });
        it('Verify the same item adding to shopping cart', () => {
           categoryTests.checkedAddedtheSameProductNameToCart()
        });
        it('Verify the same price ammount adding to shopping cart', function () {
           categoryTests.checkedAddedtheSameProductPriceToCart()
        });
    })


})