describe("testing dvla reg lookup", () => {
  it("searches for plate, retrieves results", () => {
    cy.visit("/");
    cy.findByLabelText("Registration Number").type("MC20 FLY");
    cy.findByTestId("search-button").click();
    cy.findByTestId("vehicle-details").within(() => {
      cy.findByText("Registration Plate:").closest("li").findByText("MC20FLY");
      cy.findByText("Make:").closest("li").findByText("PEUGEOT");
      cy.findByText("Colour:").closest("li").findByText("RED");
      cy.findByText("Tax due on:").closest("li").findByText("2024-07-01");
    });
  });
});
