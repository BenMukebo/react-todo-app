import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  // onChange = e => {
  //   this.setState({
  //     title: e.target.value
  //   });
  // };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const { title } = this.title;

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(title);
      this.setState({
        title: '', // Clear the input field once we have submitted a todos item for subsequent entry
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}

export default InputTodo;
