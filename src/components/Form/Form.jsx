import { Component } from 'react';
import shortid from 'shortid';

export class Form extends Component {
  state = {
    name: '',
    nickname: '',
    experience: 'junior',
  }

  nameInputId = shortid.generate();
  nicknameInputId = shortid.generate();

  handleChange = event => {
    const { name, value} = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', nickname: ''})
  }

  render() {
    const { name, nickname } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} >
            Ім'я <input id={this.nameInputId} type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label htmlFor={this.nicknameInputId}>
            Нікнейм <input id={this.nicknameInputId} type="text" name="nickname" value={nickname} onChange={this.handleChange} />
          </label>
          
          <p>Ваш рівень:</p>
          <label htmlFor="">
            <input type="radio" name="experience" value="junior" onChange={this.handleChange}/> Junior
          </label>
          <label htmlFor="">
            <input type="radio" name="experience" value="middle" onChange={this.handleChange}/> Middle
          </label>
          <label htmlFor="">
            <input type="radio" name="experience" value="senior" onChange={this.handleChange}/> Senior
          </label>

          <button type="submit" >Відправити</button>
        </form>
    )
  }
}