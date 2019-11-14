///<reference types="cypress"/>

describe('todo actions',() =>{
    it.only('should add a new todo to the list', () => {
        cy.visit('todomvc-app-for-testing.surge.sh')
    
        cy.get('.new-todo').type('Clean room{enter}')
    
        cy.get('label').should('have.text','Clean room')
        cy.get('.toggle').should('not.be.checked')
    })
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css','text-decoration-line','line-through')
    })
    
    it('should clear completed todos', () => {
        cy.contains('Clear').click()
    
        cy.get('.todo-list').should('not.have.descendants','li')
        // cy.contains('Clear completed').click()
    });
})
