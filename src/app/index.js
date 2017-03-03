var React = require("react");
var ReactDOM = require("react-dom");
require('./css/index.css');

// module requires
var TodoItem = require("./todoItem");
var AddItem = require("./addItem");

var TodoComponent = React.createClass({
  getInitialState: function(){
    return{
      todos: ['shower', 'eat breakfast', 'go to work', 'sleep']
    }
  },
  render: function(){
    //local version of state. don't want to change it
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete} />
      );
    }.bind(this))

    return (
      <div id="todo-list">
        <p>shit i have to do (but probably won't)</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  },

  //==================
  // custom functions
  //==================

  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index){
      // if returns true, filter item out of the array
      // if false, keep the item in the array
      // basically, return anything from the array that isn't the item selected to be deleted
      return item !== val;
    });

    // take the state of this component and reset it with the filtered array
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
});


// put component into html page
ReactDOM.render(
  <TodoComponent />, 
  document.getElementById("todo-wrapper")
)