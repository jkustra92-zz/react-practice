var React = require("react");
var ReactDOM = require("react-dom");

var TodoComponent = React.createClass({
  render: function(){
    return (
      <h1>Hellooooooo</h1>
    );
  }
});

// put component into html page

ReactDOM.render(
  <TodoComponent />, 
  document.getElementById("todo-wrapper")
)