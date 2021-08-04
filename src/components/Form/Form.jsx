import { Component } from 'react';
import Button from '@material-ui/core/Button';
import shortid from 'shortid';

export class Form extends Component {
  state = {
    name: '',
    nickname: '',
    experience: 'junior',
    license: false,
  }

  nameInputId = shortid.generate();
  nicknameInputId = shortid.generate();

  handleChange = event => {
    const { name, value} = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleLicenseChange = (event) => {
    const { checked } = event.currentTarget;
    this.setState({ license: checked})
 
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', nickname: '', experience: 'junior'})
  }

  render() {
    const { name, nickname, license, experience } = this.state;
    console.log('render', this.state)
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
            <input type="radio" name="experience" value="junior" checked={ experience === 'junior' } onChange={this.handleChange}/> Junior
          </label>
          <label htmlFor="">
            <input type="radio" name="experience" value="middle" checked={ experience === 'middle' } onChange={this.handleChange}/> Middle
          </label>
          <label htmlFor="">
            <input type="radio" name="experience" value="senior" checked={ experience === 'senior' } onChange={this.handleChange}/> Senior
          </label>
          <br></br>
          <label htmlFor="">
            <input  type="checkbox" name="license" checked={ license } onChange={this.handleLicenseChange} required/> Згоден(-на) на будь-які умови
          </label>
          {/* <button type="submit" disabled={ !license }>Відправити</button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={ !license }
          >
            Відправити
          </Button>
             
        </form>
    )
  }
}