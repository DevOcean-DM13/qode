// Michael's

// checks if the answer button clicks
describe("The check answer button clicks", () => {
  it("click check answer button button", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy-checkanswer]").click();
  });
});

describe("The email input exist", () => {
  it("email input exist", () => {
    cy.visit("http://localhost:3000/signup");

    cy.get("[data-cy-create-email]")
      .click()
      .should("exist");
  });
});

describe("The register button says register", () => {
  it("register button says register", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-cy-register]").should("have.text", "Register");
  });
});

describe("The url should match", () => {
  it("url matches", () => {
    cy.visit("http://localhost:3000");
    cy.hash().should("be.empty");
  });
});

describe("Correct title", () => {
  it.only("the title should be Qode", () => {
    cy.visit("http://localhost:3000");

    cy.title().should("include", "Qode");
  });
});
