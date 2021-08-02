import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={styles.TodoList}>
      {todos.map( ({ id, text, completed }) => (
        <li key={id} className={styles.TodoList__item}>
          <p className={styles.TodoList__text}>{text}</p>
          <button className={styles.TodoList__button} onClick={() => onDeleteTodo(id)}>Видалити</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList