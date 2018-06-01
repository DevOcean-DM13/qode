describe("Sign Up Now button works", () => {
  it("Go to sign up page", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data - cy - signup]").click();
    cy.location().should(location => {
      expect(location.pathname).to.eq("/signup");
    });
  });
});
