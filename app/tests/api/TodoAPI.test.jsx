var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
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
