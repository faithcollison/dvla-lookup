describe('My First Test', () => {
  it('Visits homepage', () => {
    cy.visit('https://faithcollison.github.io/dvla-lookup/')
    cy.findByLabelText("Reg Plate").type("MC20FLY");
    cy.findByTestId("search-button").click();
    // cy.findByTestId("vehicle-details").within(() => {
    //   cy.findByText("Registration Plate:").closest("li").findByText("MC20 FLY");
    cy.get('[data-testid="vehicle-details"]').within(() => {
      // Replace 'Registration Plate:' and 'MC20 FLY' with the actual text you expect
      cy.contains('Registration Plate:').should('be.visible');
      cy.contains('MC20 FLY').should('be.visible');
    });
  })
})
