export class TodoPage{
    navigate(){
        cy.visit('todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText){
        cy.get('.new-todo').type(todoText + "{enter}")
    }
}