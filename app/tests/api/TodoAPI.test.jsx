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

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Buy chicken',
      completed: true
    }, {
      id: 2,
      text: 'Eat chicken',
      completed: true
    }, {
      id: 3,
      text: 'Sell chicken',
      completed: false
    }];
    it('should return all todos if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should only return uncompleted items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos if searchText empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should filter todos by searchText', () => {
      var searchText = 'eat';
      var filteredTodos = TodoAPI.filterTodos(todos, true, searchText);
      expect(filteredTodos.length).toBe(1);
    });
  });
});
