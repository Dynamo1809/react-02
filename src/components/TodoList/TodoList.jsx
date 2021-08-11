import classNames from 'classnames/bind';
import Todo from 'components/Todo';
import styles from './TodoList.module.scss';

var cx = classNames.bind(styles)

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map( ({ id, text, completed }) => (
        <li key={id} className={cx('TodoList__item', {
          'TodoList__item--completed': completed
        })}>
          <Todo 
            completed={completed} 
            text={text} 
            onToggleCompleted={() => onToggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)} 
          />
        </li>
      ))}
    </ul>
  )
}

export default TodoList