describe('Logging TEST Env Variable', () => {
  it('Logs the value of TEST', () => {
    // Access the value of TEST from the environment variables
    const testMessage = Cypress.env('TEST');
    // Log the value to the Cypress console
    cy.task('log', `Here is the value of TEST: ${testMessage}`);
    cy.log(testMessage);
  });
});
