/* eslint-disable no-undef */
const loginPage = () => {
  cy.get('.ant-btn').click();
  // check validation
  cy.get('#login_email_help > .ant-form-item-explain-error')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal('Please input your username or Email!');
    });
  cy.get('#login_password_help > .ant-form-item-explain-error')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal('Please input your password');
    });
  cy.get('#login_email').type('abhishek+4@pointsville.com').should('have.value', 'abhishek+4@pointsville.com');
  cy.get('#login_password').type('Test@123').should('have.value', 'Test@123');
  cy.get('.ant-btn').click();
};
export default loginPage;
