/// <reference types="cypress" />
it('adds 2 items', () => {
  cy.visit('http://todomvc.com/examples/react/')
  // finds element with class "new-todo"
  cy.get('.new-todo')
    // and types two items, like a real user
    .type('install Cypress{enter}')
    .type('start testing{enter}')
  // finds list elements and asserts that there are two of them
  cy.get('.todo-list li').should('have.length', 2)
})
