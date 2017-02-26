var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to todos state on handleAddTodo', () => {
    var todoText = 'Cut nails';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle todo completed attribute on calling handleToggle', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    var todo = [
      {
        id: 5,
        text: 'Sweep floor',
        completed: false,
        createdAt: 0,
        completedAt: undefined
      }
    ];
    todoApp.setState({todos: todo});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todo[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt when toggling completed from true to false', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    var todo = [
      {
        id: 5,
        text: 'Sweep floor',
        completed: true,
        createdAt: 0,
        completedAt: 634
      }
    ];
    todoApp.setState({todos: todo});
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(todo[0].id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
