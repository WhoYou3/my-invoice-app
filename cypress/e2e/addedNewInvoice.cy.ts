/// <reference types="Cypress"/>

describe("Added new Invoice", () => {
  it("Added form as Draft", () => {
    cy.visit("/");
    cy.get("[data-cy='new-form-button']").click();
    cy.get("[data-cy='invoice-form']").within(() => {
      cy.get("input").eq(0).type("Jasiek");
      cy.get("input").eq(1).type("Irzyk");
      cy.get("input").eq(2).type("Downtown 18");
      cy.get("input").eq(3).type("Manchester");
      cy.get("input").eq(4).type("42-420");
      cy.get("input").eq(5).type("Kraków");
      cy.get("input").eq(6).type("2023-05-19");
      cy.get("#PaymentTerms").select("30");
      cy.get("input").eq(7).type("New Design");
    });
    cy.contains("button", "+Add New Item").click();
    cy.get('[data-cy="added-item"]').within(() => {
      cy.get("input").eq(0).type("Test item");
      cy.get("input").eq(1).type("2");
      cy.get("input").eq(2).type("150");
      let values = 2 * 150;
      cy.get("input").eq(3).should("have.value", values.toFixed(2));
    });
    cy.pause();
    cy.contains("button", "Save as Draft").click();
    cy.wait(1000);
  });

  it("Added form as Pending", () => {
    cy.visit("/");
    cy.get("[data-cy='new-form-button']").click();
    cy.get("[data-cy='invoice-form']").within(() => {
      cy.get("input").eq(0).type("Marcin");
      cy.get("input").eq(1).type("Test");
      cy.get("input").eq(2).type("Downtown 182");
      cy.get("input").eq(3).type("Manchesters");
      cy.get("input").eq(4).type("42-120");
      cy.get("input").eq(5).type("Kraków");
      cy.get("input").eq(6).type("2023-05-29");
      cy.get("#PaymentTerms").select("14");
      cy.get("input").eq(7).type("New Design test");
    });
    cy.contains("button", "+Add New Item").click();
    cy.get('[data-cy="added-item"]').within(() => {
      cy.get("input").eq(0).type("Test item");
      cy.get("input").eq(1).type("4");
      cy.get("input").eq(2).type("250");
      let values = 4 * 250;
      cy.get("input").eq(3).should("have.value", values.toFixed(2));
    });
    cy.contains("button", "Save & Send").click();
  });
});
