import { Component } from 'react';
import './TodoEditor.scss';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({ message: value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    console.log(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ message: ''});
  }

  render() {
    const { message } = this.state;

    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea required value={message} onChange={this.handleChange} className="TodoEditor__textarea"></textarea>
        <button type="submit" className="TodoEditor__button">Додати задачу</button>
      </form>
    )
  };
};