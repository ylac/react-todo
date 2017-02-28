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
});
