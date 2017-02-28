var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle the showCompleted attribute', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var initialState = true;
      var res = reducers.showCompletedReducer(df(initialState), df(action));

      expect(res).toNotEqual(initialState);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Take a nap'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
        id: '854s',
        text: 'Eat lunch',
        completed: false,
        createdAt: 653757653,
        completedAt: undefined
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: todos[0].id
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(todos.length);
      expect(res[0].completed).toNotEqual(todos[0].completed);
      expect(res[0].completedAt).toBeA('number');
    });
  });

});
