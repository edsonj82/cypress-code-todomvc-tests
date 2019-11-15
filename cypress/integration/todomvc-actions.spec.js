///<reference types="cypress"/>

import { TodoPage } from "../page-objects/todo-page";

describe('todo actions',() =>{
    const todoPage = new TodoPage

    beforeEach(()=>{
        todoPage.navigate()//cy.visit('todomvc-app-for-testing.surge.sh')
        
        todoPage.addTodo('Clean room')// cy.get('.new-todo').type('Clean room{enter}')
    
    })
    it('should add a new todo to the list', () => {
        cy.get('label').should('have.text','Clean room')
        cy.get('.toggle').should('not.be.checked')
    })
    
    it.only('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css','text-decoration-line','line-through')
    })
    
    it('should clear completed todos', () => {
        cy.contains('Clear').click()
    
        cy.get('.todo-list').should('not.have.descendants','li')
        // cy.contains('Clear completed').click()
    });
})
