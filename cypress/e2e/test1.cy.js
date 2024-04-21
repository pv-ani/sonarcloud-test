const loginPage = require('../pageobject/loginpage');

describe('template spec', () => {
  const URL = Cypress.env('BASE_URL');
  beforeEach(() => {
    cy.viewport(1366, 768); // Set viewport to 1366px x 768px
  });

  it('should login successfully with valid credentials', () => {
    cy.visit(`${URL}`);
    loginPage();
  });
});
