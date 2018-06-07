// Will's cypress

describe("Landing Page Blue is the right blue", () => {
  it("View Side Bar Color", function() {
    cy.visit("http://localhost:3000/signup");
    cy.get("#SignUpSideBar")
      .should("exist")
      .and("have.css", "font-family")
      .and("match", /sans-serif/);
  });
});

describe("Size of Qode", () => {
  it("Showing the Qode", function() {
    cy.visit("http://localhost:3000/signup");
    cy.get("#QODE")
      .should("have.css", "font-size")
      .and("match", /80px/);
  });
});

describe("Input Values should be typed and erasable", () => {
  it("Typing and Erasing Input", function() {
    cy.visit("http://localhost:3000/signup");
    cy.get("#userBox")
      .type("buttisbutt")
      .should("have.value", "buttisbutt")
      .clear()
      .should("have.value", "");
  });
});

describe("Viewport Compatibility", () => {
  it("ViewPort Variety", function() {
    cy.visit("http://localhost:3000/");
    cy.viewport("macbook-15");
    cy.wait(200);
    cy.viewport("macbook-13");
    cy.wait(200);
    cy.viewport("macbook-11");
    cy.wait(200);
    cy.viewport("ipad-2");
    cy.wait(200);
    cy.viewport("ipad-mini");
    cy.wait(200);
    cy.viewport("iphone-6+");
    cy.wait(200);
    cy.viewport("iphone-6");
    cy.wait(200);
    cy.viewport("iphone-5");
    cy.wait(200);
    cy.viewport("iphone-4");
    cy.wait(200);
    cy.viewport("iphone-3");
    cy.wait(200);
  });
});

describe("Correct Line Height For Slogan", () => {
  it("Correct Line Height", function() {
    cy.visit("http://localhost:3000/");
    cy.get("#BLURB")
      .should("exist")
      .and("have.css", "line-height")
      .and("match", /28px/);
  });
});
