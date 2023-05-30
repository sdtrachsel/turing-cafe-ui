describe('reservation form', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservations'
    } )
    .visit('http://localhost:3000/')
  })

  it('should have a form for a user to enter a new reservation ', () => {
    cy.get("input[name='name']").type('Paul')
      .get("input[name='date']").type('2023-09-05')
      .get("input[name='time']").type('5:30')
      .get("input[name='number']").type('2')
    cy.get('.form-input').first().should('have.value', 'Paul')
                          .next().should('have.value', '2023-09-05')
                          .next().should('have.value', '5:30')
                          .next().should('have.value', '2')         
    cy.get('.form-submit').click()
    cy.get('.res-card').last().find('p').first().contains('Paul')
      .next().contains('2023-09-05') 
      .next().contains('5:30') 
      .next().contains('2')   
    
  })
})