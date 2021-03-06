var expect = require('expect');
import thunk from 'redux-thunk';
var df = require('deep-freeze-strict');
var reducers = require('reducers');
var actions = require('actions');
import configureMockStore from 'redux-mock-store';
import firebase, {firebaseRef} from 'app/firebase';

var createMockStore = configureMockStore([thunk]);

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
        todo: {
          id: 'abc123',
          text: 'Sleep',
          completed: false,
          createdAt: 365734
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: '854s',
        text: 'Eat lunch',
        completed: false,
        createdAt: 653757653,
        completedAt: undefined
      }];
      var updates = {
        completed: true,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
  });

  it('should add existing todos', () => {
    var todos = [{
      id: '854s',
      text: 'Eat lunch',
      completed: false,
      createdAt: 653757653,
      completedAt: undefined
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });

  it('should wipe todos on logout', () => {
    var todos = [{
      id: '854s',
      text: 'Eat lunch',
      completed: false,
      createdAt: 653757653,
      completedAt: undefined
    }];
    var action = {
      type: 'LOGOUT'
    };
    var res = reducers.todosReducer(df([todos]), df(action));

    expect(res).toEqual([]);
  });


  describe('authReducer', () => {
    it('should store the uid on the state', () => {
      const action = {
        type: 'LOGIN',
        uid: '235wer34'
      }
      var res = reducers.authReducer(undefined, df(action));

      expect(res.uid).toEqual(action.uid);
    });

    it('should clear the uid in store on logout', () => {
      const action = {type: 'LOGOUT'};
      const store = {
        uid: '2t3t2trewtg'
      };

      var res = reducers.authReducer(store, df(action));
      expect(res).toEqual({});
    });
  });
});
