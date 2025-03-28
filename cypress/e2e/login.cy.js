describe('Login flow Correct credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  
  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('felipe0000@mail.com')
    cy.get('input[type="password"]').type('@983A85b2')
    cy.get('button[type="submit"]').click()
    cy.url().should('include','/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login flow Invalid credentials', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  
  it('should display login form', () => {
    cy.get('form').should('be.visible')
  })

  it('should login with invalid credentials', () => {
    cy.get('input[type="email"]').type('felip5587@mail.com')
    cy.get('input[type="password"]').type('@#dncFelipe231')
    cy.get('button[type="submit"]').click()
    cy.contains('Email e/ou senha invalidos').should('be.visible')
  })
})

