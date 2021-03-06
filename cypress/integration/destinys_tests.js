/* Test:  .*/

describe("User can view accordion contents on Landing", () => {
  it(".click() lesson elements", function() {
    cy.visit("http://localhost:3000/");
    cy.get(".accordion-container").should("be.visible");
    cy.get(".lesson1")
      .should("exist")
      .click();
    cy.get(".lesson2")
      .should("exist")
      .click();
    cy.get(".lesson3")
      .should("exist")
      .click();
  });
});

describe("", () => {
  it("user can solve toy problem", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ace_content")
      .click()
      .get(".ace_text-input")
      .should("exist")
      .type("</p>", { force: true });
    //can't access the text-input because it is under .ace-content; set force:true to force it to click;
  });
});

describe("User can pick profile image", () => {
  //not redoing joe's login test, adding test to cover new feature.
  it("", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-cy-register]").click();

    cy.get("img.cypress-prof-img")
      .should("exist")
      .should("have.attr", "src")
      .and(
        "eq",
        "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg"
      );

    cy.get(".picButton")
      .should("exist")
      .click({ multiple: true });

    cy.get("img.cypress-prof-img")
      .should("have.attr", "src")
      .and(
        "not.eq",
        "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg"
      );
    // .click({ multiple: true });
  });
});

describe("slideshow images reference correct source", () => {
  it.only("image src match", () => {
    cy.visit("http://localhost:3000/");

    cy.scrollTo(0, 700);

    cy.get(".images")
      .get("#html")
      .should("have.attr", "src")
      .and("eq", "/static/media/html.e8d86395.png");

    cy.get(".images")
      .get("#css")
      .should("have.attr", "src")
      .and("eq", "/static/media/css.3fe13a36.png");

    cy.get(".images")
      .get("#javascript")
      .should("have.attr", "src")
      .and("eq", "/static/media/javascript.6f07e078.png");
  });
});
describe("Login button says login", () => {
  it.only("login button says login", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-cy-login]").should("have.text", "Login");
  });
});
