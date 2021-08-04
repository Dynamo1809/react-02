import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';

var cx = classNames.bind(styles)

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map( ({ id, text, completed }) => (
        <li key={id} className={cx('TodoList__item', {
          'TodoList__item--completed': completed
        })}>
          <input
          type="checkbox"
          className={styles.TodoList__checkbox}
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
          <p className={styles.TodoList__text}>{text}</p>
          <button className={styles.TodoList__button} onClick={() => onDeleteTodo(id)}>Видалити</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList