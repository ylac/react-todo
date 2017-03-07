var $ = require('jquery');

module.exports = {
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })
    // Filter by searchText
    if (searchText.length > 0) {
      var searchStr = searchText.toLowerCase();
      filteredTodos = filteredTodos.filter((todo) => {
        var todoText = todo.text.toLowerCase();
        var todoFoundIndex = todoText.indexOf(searchStr);
        return (todoFoundIndex >= 0) ? true : false;
      });
    }

    // Sort todos with uncompleted first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
