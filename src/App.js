import React, { Component } from 'react';
import shortid from 'shortid';
// import PropTypes from 'prop-types';
// Components //
import TodoList from './components/TodoList';
import { Container } from 'components/Container';
// import { Form } from 'components/Form';
import { TodoEditor } from 'components/TodoEditor';
import { TodoFilter } from 'components/TodoFilter';
import { Modal } from './components/Modal';
import { Clock } from './components/Clock/';
import IconButton from 'components/IconButton';
// JSON //
import initialTodos from 'json/todos';
// Styles //
import './App.scss';
// Svg //
import {ReactComponent as AddIcon} from 'icons/add.svg';



class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
    showModal: false
  };

  componentDidMount() {
    console.log('componentDidMount в Апп')
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if(parsedTodos){
      console.log('componentDidMount if є parsedTodos')
      this.setState({ todos: parsedTodos})
    }
  };

  componentDidUpdate( prevProps, prevState) {
    const { todos } = this.state;
    if( todos !== prevState.todos){
      console.log('записуєм в локалстораже зміни')
      localStorage.setItem('todos', JSON.stringify(todos))
    };
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    }
    this.setState( ({ todos }) => ({
      todos: [todo, ...todos],
    }))
  }

  formSubmitHandler = data => {
    console.log(data);
  };
  
  toggleCompleted = todoId => {
    this.setState( prevState => ({
      todos: prevState.todos.map( todo => todo.id === todoId 
        ? {...todo, completed: !todo.completed} 
        : todo)
    }))
  };

  deleteTodo = (todoId) => {
    this.setState( prevState => ({
      todos: prevState.todos.filter( todo => todo.id !== todoId),
    }) )
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ text }) => text.toLowerCase().includes(normalizedFilter))
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed
      ? acc + 1
      : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render () {
    const { todos, filter,showModal } = this.state;
    const totalTodoCount = todos.length;
    const compledTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Clock />
        
        <h1>Завдання на найближчий місяць</h1>
        <div>
          <p style={{fontSize: '20px',fontWeight: 500,}} >Загальна кількість: {totalTodoCount}</p>
          <p style={{fontSize: '20px',fontWeight: 500,}}>Кількість виконаних: {compledTodoCount}</p>
        </div>
        
        <IconButton onClick={this.toggleModal} aria-label="Додати todo">
          <AddIcon width="40" height="40" fill="white"></AddIcon>
        </IconButton>
        <TodoFilter value={filter} onChange={ this.changeFilter }/>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <TodoList 
          todos={visibleTodos} 
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}/>

        {/* <button type="button" onClick={this.toggleModal}>Відкрити модалку</button> */}
        {showModal &&
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            <button className="CloseModalButton" type="button" onClick={this.toggleModal}>Закрити модалку</button>
          </Modal>
        }
              
      </Container>
    )
  }
};

export default App;
