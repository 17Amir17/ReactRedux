/// <reference types="cypress" />

describe("Shop and Cart should work", () => {
  before(() => {
    cy.visit("http://localHost:3000");
  });
  describe("Shop Test", () => {
    it("Should have 5 apples and 10 oranges", () => {
      cy.get(".item").eq(0).find("span").eq(-1).contains("5");
      cy.get(".item").eq(1).find("span").eq(-1).contains("10");
    });
    it("can buy apples and oranges", () => {
      cy.get("button").eq(0).click();
      cy.get("button").eq(0).click();
      cy.get("button").eq(1).click();
    });
    it("Should now have 3 apples and 9 oranges", () => {
      cy.get(".item").eq(0).find("span").eq(-1).contains("3");
      cy.get(".item").eq(1).find("span").eq(-1).contains("9");
    });
  });
  describe("Shop can run out of stock", () => {
    it("Should not go under 0 quantity", () => {
      for (let i = 0; i < 10; i++) {
        cy.get("button").eq(0).click();
      }
      cy.get(".item").eq(0).find("span").eq(-1).contains("0");
    });
  });
  describe('Cart should work', () => {
      before(() => {
        cy.visit("http://localHost:3000");
      })
      it('I can buy items', () => {
        cy.get("button").eq(0).click();
        cy.get("button").eq(1).click();
      })
      it('They should be in cart', () => {
          cy.get('.cart').contains('Apples')
          cy.get('.cart').contains('Oranges')
      })
      it('Total should be 15$', () => {
        cy.get('.cart').contains('15$')
      })
      describe('Checkout should clear total and restock', () => {
          it('can checkout', () => {
              cy.contains('Checkout').click()
          })
          it("Should have 5 apples and 10 oranges", () => {
            cy.get(".item").eq(0).find("span").eq(-1).contains("5");
            cy.get(".item").eq(1).find("span").eq(-1).contains("10");
          });
          it('Should have no items in cart', () => {
            cy.get('.cart').contains('Please buy stuff')
          })
          it('Total should be 15$', () => {
            cy.get('.cart').contains('0$')
          })
      })
  })
});
