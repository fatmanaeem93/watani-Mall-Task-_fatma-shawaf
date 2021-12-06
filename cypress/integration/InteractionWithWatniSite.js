/// <reference types="cypress" />

describe('add and delete monitor product', () => {
    let product_name = ""
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
    context('Filltering Monitor Product with type asus', () => {
        it('Verify clicking on all category tab', () => {
            //  cy.get("#nav a[href='https://watanimall.com/all-categories']").trigger("mouseover").should("have.class","hover")
            cy.get("#nav a[href='https://watanimall.com/all-categories']").click()
            cy.url().should("contain", "/all-categories")
        });
        it('Verify clicking on Menitor Section', () => {
            cy.get("#main a[href='https://watanimall.com/product-category/monitors']").click()
            cy.url().should("contain", "/product-category/monitors")
        });
        it('Verify clicking on asus from manufacturer menu', () => {
            cy.get('[data-value="asus"]').click()
            cy.url().should("contain", "https://watanimall.com/product-category/monitors?_manufacturer=asus")
        });
    })
    context('Adding Monitor to cart', () => {
        it('Verify shopping cart icon have 0 value', () => {
            cy.get(".mini_cart_control .counter").should('have.text', '0')
        });
        it('Verify Adding monitor having the lowest price', () => {
            cy.get("select[name='orderby']").select('price', { force: true }).should('have.value', 'price')
        });
        context('Adding monitor with lowest price', () => {
            it('Verify hovering and clicking on add to cart button', () => {
                cy.get('.products-row > :nth-child(1)').trigger('mouseover', 'center').find('.btn-add-cart').click({ force: true })
                cy.get('.products-row > :nth-child(1) .product-name').then((el) => {
                    product_name = el.text()
                })
                cy.get(":nth-child(1) > .product-item > .product-price > .woocommerce-Price-amount > bdi").then((el) => {
                    cy.wrap(el.text()).as('product_price1')
                })
            });
            it('Verify shopping cart show', () => {
                cy.get('.header-mini-cart').should("be.visible")
            });
            it('Verify the lenght of shopping cart item', () => {
                cy.get('div.mini-cart-body .cart-item').should("have.length", "1")
            });
            it('Verify adding the same amount to cart', () => {
                cy.get(".cart-quantity input").should('have.value', '1')
            });
            it('Verify adding the same amount shopping cart', () => {
                cy.get('.mini_cart_control .counter').should('have.text', '1')
            });
            it('Verify the same item adding to shopping cart', () => {
                cy.get(".mini-cart-items .product-name a").first().should("contain", product_name.trim().slice(1, 10))
            });
            it('Verify the same price ammount adding to shopping cart', function () {
                cy.get('.product-amount > .woocommerce-Price-amount > bdi').should("contain", this.product_price1)
            });
            // it('Verify subtotal amount', () => {
            //     cy.get(".sub-total-amount")
            // });
            it('Verify clicking on close shopping cart', () => {
                cy.get('.header-mini-cart .icon-close').click()
                cy.get('.header-mini-cart').should("not.be.visible")
            })
        })
        context('Adding another monitor', () => {
            it('Verify choosing the lowest price menitor', () => {
                cy.get('.products-row > :nth-child(2)').click()
                cy.get('.products-row > :nth-child(1) .product-name').then((el) => {
                    cy.wrap(el.text()).as('product_name2')
                })
                cy.get(":nth-child(1) > .product-item > .product-price > .woocommerce-Price-amount > bdi").then((el) => {
                    cy.wrap(el.text()).as('product_price2')
                })
            });
            it.skip('Verify the same item adding', function () {
                cy.get(".product_title").first().should("contain",this.product_name2.trim().slice(1, 10))
            });
            it.skip('Verify the same price ammount adding', function () {
                cy.get('.summary > .product-price > .woocommerce-Price-amount > bdi', { timeout: 10000 }).should("contain",this.product_price2)
            });
            it('Verify adding tow amount of product', () => {
                cy.get(".quantity .jcf-btn-inc").click()
            });
            it('Verify clicking on add to cart button', () => {
                cy.get(".single_add_to_cart_button").click()
                cy.get('.header-mini-cart').should("be.visible")
            });
            it('Verify the lenght of shopping cart item', () => {
                cy.get('div.mini-cart-body .cart-item').should("have.length", "2")
            });
            // it('Verify subtotal amount', () => {
            //     cy.get(".sub-total-amount")
            // });
            it('Verify adding the same amount to cart', () => {
                cy.get(".cart-quantity input").should('have.value', '1')
            });
            it('Verify adding the same amount shopping cart', () => {
                cy.get('.mini_cart_control .counter').should('have.text', '3')
            });
        })


    })
    context('Delete one monitor from shopping cart', () => {
        it('Verify clicking on delete first product', () => {
            cy.get(".cart-remove").first().click()
        });
        it('Verify Deleting the item', () => {
            cy.get('div.mini-cart-body .cart-item').should("have.length", "1")
        });

    })
})