import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };

  // onChange = e => {
  //   this.setState({
  //     title: e.target.value
  //   });
  // };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    // to clear the input field once we have submitted a todos item for subsequent entry
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add todo..."
         value={this.state.title}
         name="title"
         onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo