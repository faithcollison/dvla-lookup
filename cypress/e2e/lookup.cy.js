describe('My First Test', () => {
  it('Visits homepage', () => {
    cy.visit('https://faithcollison.github.io/dvla-lookup/')
    cy.findByLabelText("Reg Plate").type("MC20FLY{enter}");
    cy.findByTestId("vehicle-details").within(() => {
      cy.findByText("Registration Plate:").closest("li").findByText("MC20 FLY");
    });
  })
})
