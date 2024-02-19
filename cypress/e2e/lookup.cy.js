describe('My First Test', () => {
  it('Visits homepage', () => {
    cy.visit('https://faithcollison.github.io/dvla-lookup/')
    cy.findByLabelText("Reg Plate").type("MC20 FLY");
    cy.findByTestId("search-button").click();
    cy.findByTestId("vehicle-details").within(() => {
      cy.findByText("Registration Plate:").closest("li").findByText("MC20FLY");
      cy.findByText("Make:").closest("li").findByText("PEUGEOT");
      cy.findByText("Colour:").closest("li").findByText("RED");
      cy.findByText("Tax due on:").closest("li").findByText("2024-07-01");
    })

  })
})
