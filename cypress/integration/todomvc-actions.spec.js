/// <reference types="cypress" />
import {
  navigate,
  addTodo,
  toggleTodo,
  validateTodoText,
  validateToggleState,
  validateTodoCompletedState,
  clearCompleted,
  validateNumberOfTodosShown,
  showOnlyCompletedTodos,
  showOnlyActiveTodos,
  showAllTodos,
  } from '../page-objects/todo-page'

  describe('todo actions', () => {
    //const todoPage = new TodoPage()

    beforeEach(() => {
      navigate()//todoPage.navigate()

      addTodo('Clean room')//todoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
      validateTodoText(0, 'Clean room')//todoPage.validateTodoText(0, 'Clean room')

      validateToggleState(0, false)//todoPage.validateToggleState(0, false)
    })

    describe('toggling todos',()=>{
      it('should toggle test correctly', () => {
        toggleTodo(0)//todoPage.toggleTodo(0)
          
        validateTodoCompletedState(0,true)//todoPage.validateTodoCompletedState(0,true)
      })

      it.only('should clear completed', () => {
        toggleTodo(0)//todoPage.toggleTodo(0)

        clearCompleted()//todoPage.clearCompleted()

        validateNumberOfTodosShown(0)//todoPage.validateNumberOfTodosShown(0)
      })
  })
})
