/*
-------------------------------PURPOSE OF THIS TEST-------------------------
VALIDATES THAT THE SITE EXISTS. USER LOGS IN LOGS OUT SUCCESSFULLY. SUCCESSFULLY REGISTERS A USER
*/

//Asserts title is correct
describe("Site exists", () => {
  it(".should() - assert that <title> is correct and location pathname correct", () => {
    cy.visit("http://localhost:3000/");
    cy.location().should(location => {
      expect(location.pathname).to.eq("/");
    });
  });
});
//successfully logs in
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
//logs out and gets redirected to landing page
describe("Successful logout", () => {
  it("Logging out", () => {
    cy.get("[data-cy-logout-btn]").click();
  });
  it("Navbar not visible after logout", () => {
    cy.get("[data-cy-login-box]").should("not.be.visible");
  });
});

function generateLogin(newEmail) {
  var emptyArr = [];
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z"
  ];
  if (!newEmail) {
    for (var i = 0; i < 10; i++) {
      let rando = Math.floor(Math.random() * 10);
      emptyArr.push(alphabet[rando]);
    }
    return emptyArr.join("");
  }
  if (newEmail.length % 2 === 0) {
    for (var i = 0; i < 5; i++) {
      let rando = Math.floor(Math.random() * 10);
      emptyArr.push(alphabet[rando]);
    }
    newEmail.push(emptyArr.join(""));
    emptyArr = [];
    generateLogin(newEmail);
  } else if (newEmail.length == 1) {
    newEmail.push("@");
    generateLogin(newEmail);
  } else if (newEmail.length == 3) {
    newEmail.push(".");
    generateLogin(newEmail);
  } else {
    return newEmail.join("");
  }
  return newEmail.join("");
}

describe("Registering a user", () => {
  it("Registering user", () => {
    cy
      .get("[data-cy-register]")
      .click()
      .get("[data-cy-background]")
      .click({ multiple: true })
      .get("[data-cy-purpose]")
      .click({ multiple: true })
      .get("[data-cy-goals]")
      .type(
        "THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. THIS IS NOT A TEST. "
      )
      .get("[data-cy-create-email]")
      .type(generateLogin([]))
      .get("[data-cy-create-user]")
      .type(generateLogin(false))
      .get("[data-cy-create-password]")
      .type(generateLogin(false))
      .get("[data-cy-register-user]")
      .click();
  });
});
