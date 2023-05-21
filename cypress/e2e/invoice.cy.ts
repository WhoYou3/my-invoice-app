/// <reference types="Cypress"/>

describe("Invoice", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // it("Mark invoice as pending", () => {
  //   cy.contains("span", /draft/i).click();
  //   cy.get("div .invoiceDetail").should("be.visible");
  //   cy.contains("button", /mark as paid/i).click();
  //   cy.get("div .confirm__container-content").should("be.visible");
  //   cy.get("div .confirm__container-content").within(() => {
  //     cy.contains("button", /mark as paid/i).click();
  //   });
  //   cy.get("div .confirm__container-content").should("not.exist");
  // });
  // it("delete invoice", () => {
  //   cy.get("div .invoice__invoice").first().click();
  //   cy.contains("button", /delete/i).click();
  //   cy.get("div .confirm__container-content")
  //     .as("confirmContent")
  //     .should("be.visible");
  //   cy.get("@confirmContent").within(() => {
  //     cy.contains("button", /cancel/i).click();
  //   });
  //   cy.get("@confirmContent").should("not.exist");
  //   cy.contains("button", /delete/i).click();
  //   cy.get("@confirmContent").within(() => {
  //     cy.contains("button", /delete/i).click();
  //   });
  //   cy.get("@confirmContent").should("not.exist");
  // });
  it("filter invoice", () => {
    cy.contains("span", /filter/i).click();
    cy.get('input[value="PAID"]').check();
    cy.get("div .invoices__invoices-container").within(() => {
      cy.contains("span", /paid/i).should("exist");
      cy.contains("span", /draft/i).should("not.exist");
      cy.contains("span", /pending/i).should("not.exist");
    });
    cy.get('input[value="PENDING"]').check();
    cy.get("div .invoices__invoices-container").within(() => {
      cy.contains("span", /paid/i).should("not.exist");
      cy.contains("span", /draft/i).should("not.exist");
      cy.contains("span", /pending/i).should("exist");
    });
    cy.get('input[value="DRAFT"]').check();
    cy.get("div .invoices__invoices-container").within(() => {
      cy.contains("span", /paid/i).should("not.exist");
      cy.contains("span", /draft/i).should("exist");
      cy.contains("span", /pending/i).should("not.exist");
    });
  });
});
