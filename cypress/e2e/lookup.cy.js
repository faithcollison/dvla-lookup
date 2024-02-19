describe('My First Test', () => {
  it('Visits homepage', () => {
    cy.visit('https://faithcollison.github.io/dvla-lookup/')
    cy.findByLabelText("Registration plate").type("MC20FLY{enter}");
    // cy.url().should('include', '/commands/actions')
    // cy.get('.action-email').type('fake@email.com')
    // cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})
