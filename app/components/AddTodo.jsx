var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    var {onAddtodo} = this.props;
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="Enter new todo"/>
          <button className="button expanded">Add new todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
