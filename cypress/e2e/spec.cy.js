describe('form', () => {
  beforeEach(() => {
      cy.visit("http://localhost:3001")
      cy.get('#order-pizza').click()
  })

it('makes sure you can add text to all text inputs', () => {
  cy.get('input[name=name]')
  .type('jordon')
  .should('have.value', 'jordon')

  cy.get('input[name=specialInstructions]')
  .type('testing')
  .should('have.value', 'testing')
})

it('makes sure you can check multiple checkboxes', () => {
  cy.get('input[name=toppingOne]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingTwo]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingThree]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingFour]')
  .check()
  .should('have.value', 'true')
})

it('makes sure you can submit form', () => {
  cy.get('input[name=name]')
  .type('jordon')
  .should('have.value', 'jordon')

  cy.get('select')
  .select('small')
  .should('have.value', 'small')

  cy.get('input[name=specialInstructions]')
  .type('testing')
  .should('have.value', 'testing')

  cy.get('input[name=toppingOne]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingTwo]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingThree]')
  .check()
  .should('have.value', 'true')
  cy.get('input[name=toppingFour]')
  .check()
  .should('have.value', 'true')

  cy.get('#order-button')
  .click()
})













})