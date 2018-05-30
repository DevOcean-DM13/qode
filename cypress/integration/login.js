//Asserts title is correct
describe("Site exists", () => {
  it(".should() - assert that <title> is correct and location pathname correct", () => {
    cy.visit("http://localhost:3000/");
    cy.location().should(location => {
      expect(location.pathname).to.eq("/");
    });
  });
});
describe("Successfull login and redirect", () => {
  it("Logging in", () => {
    cy
      .get("[data-cy-login]")
      .click()
      .get("[data-cy-login-user]")
      .type("BUTT")
      .get("[data-cy-login-password]")
      .type("BUTT")
      .get("[data-cy-login-button]")
      .click();
  });
});
describe("Successful logout", () => {
  it("Logging out", () => {
    cy.get("[data-cy-logout-btn]").click();
  });
  // it("Navbar not visible after logout", () => {
  //   cy.get("[data-cy-login-box]").should("not.be.visible");
  // });
});
