var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if text entered', () => {
    var todoText = 'Eat cheese';
    var spy = expect.createSpy();
    var AddTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(AddTodoForm));

    AddTodoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo if no text entered', () => {
    var spy = expect.createSpy();
    var AddTodoForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(AddTodoForm));

    AddTodoForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
