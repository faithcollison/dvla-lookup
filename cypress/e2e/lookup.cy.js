describe('My First Test', () => {
  it('Visits homepage', () => {
    cy.visit('https://faithcollison.github.io/dvla-lookup/')
    cy.findByLabelText("Registration Plate").type("MC20FLY{enter}");
    cy.findByTestId("vehicle-details").within(() => {
      cy.findByText("Registration Plate:").closest("li, tr").findByText("MC20 FLY");
    });
  })
})