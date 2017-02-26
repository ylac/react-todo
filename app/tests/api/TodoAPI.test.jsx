var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todo = [{
        id: 3,
        text: 'Buy chicken',
        completed: false
      }];
      TodoAPI.setTodos(todo);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todo);
    });

    it('should not set invalid todos array', () => {
      var badTodo = {a: 'b'};
      TodoAPI.setTodos(badTodo);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage', () => {
      var todo = [{
        id: 3,
        text: 'Buy chicken',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todo));
      expect(TodoAPI.getTodos()).toEqual(todo);
    });

  });
});
