describe('Landing page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'reservations'
    } )
    .visit('http://localhost:3000/')
  })
  it('should display the name of the app ', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })
  it('should display a from to enter a new reservation ', () => {
    cy.get('.form-input').should('have.length', 4)
    cy.get('.form-submit').should('exist')
  })

  it('should display a list of reservations', () => {
    cy.get('.res-card').should('have.length', 5)
    cy.get('.res-card').first().find('p').first().contains('Christie')
                                           .next().contains('12/29') 
                                           .next().contains('7:00') 
                                           .next().contains('12') 
    cy.get('.res-card').last().find('p').first().contains('Will')
                                           .next().contains('5/15') 
                                           .next().contains('6:30') 
                                           .next().contains('2')       
  })
})