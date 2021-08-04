import React, { Component } from 'react';
import shortid from 'shortid';
// import PropTypes from 'prop-types';
// Components //
import TodoList from './components/TodoList';
import { Container } from 'components/Container';
import { Form } from 'components/Form';
import { TodoEditor } from 'components/TodoEditor';
// JSON //
import initialTodos from 'json/todos';
// Styles //
import './App.css';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  addTodo = text => {
    console.log('addTodo',text)
    const todo = {
      id: shortid.generate(),
      text,
      complated: false,
    }
    this.setState( ({ todos }) => ({
      todos: [todo, ...todos],
    }))
  }

  formSubmitHandler = data => {
    console.log(data);
  };
  
  toggleCompleted = todoId => {

    // this.setState( prevState => ({
    //   todos: prevState.todos.map( todo => {
    //     if( todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       };
    //     }
    //   return todo;
    //   })
    // }))

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

  render () {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const compledTodoCount = todos.reduce(( acc, todo) => (todo.completed 
      ? acc + 1 
      : acc) ,0);

    return (
      <Container>
        <h1>Завдання на найближчий місяць</h1>
        <div>
          <p>Загальна кількість: {totalTodoCount}</p>
          <p>Кількість виконаних: {compledTodoCount}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <TodoList 
          todos={todos} 
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}/>
      </Container>
    )
  }
};

export default App;
