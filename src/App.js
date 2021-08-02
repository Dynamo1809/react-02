import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// Components //
import TodoList from './components/TodoList';
import { Container } from 'components/Container';
import { Form } from 'components/Form';
// JSON //
import initialTodos from 'json/todos';
// Styles //
import './App.css';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  formSubmitHandler = data => {
    console.log(data);
  };
// handleNicknameChange = event => {
//   this.setState({ nickname: event.currentTarget.value})
// }

// handleNameChange = (event) => {
//   this.setState({ name: event.currentTarget.value })
// }

  deleteTodo = (todoId) => {
    this.setState( prevState => ({
      todos: prevState.todos.filter( todo => todo.id !== todoId),
    }) )
  };

  render () {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const compledTodoCount = todos.reduce(( acc, todo) => (todo.completed ? acc + 1 : acc) ,0)

    return (
      <Container>
        <h1>Завдання на найближчий місяць</h1>
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {compledTodoCount}</p>
        </div>
        <Form onSubmit={this.formSubmitHandler} />
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </Container>
    )
  }
};

export default App;
