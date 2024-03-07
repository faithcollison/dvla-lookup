const checkVehicleDetails = (label, value) => {
  cy.findByTestId("vehicle-details").within(() => {
    cy.findByText(label).closest("li, tr").findByText(value);
  });
};

describe("testing dvla reg lookup", () => {
  it("searches for plate, retrieves results", () => {
    cy.visit("/");
    cy.findByLabelText("Registration Number").type("MC20 FLY{enter}");
    checkVehicleDetails("Registration Plate:", "MC20FLY");
    checkVehicleDetails("Make:", "PEUGEOT");
    checkVehicleDetails("Colour:", "RED");
    checkVehicleDetails("Tax due on:", "2024-07-01");
  });
});
