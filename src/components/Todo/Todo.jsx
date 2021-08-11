import IconButton from 'components/IconButton';
import styles from '../TodoList/TodoList.module.scss';
import {ReactComponent as DeleteIcon} from 'icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDelete}) => (
  <>
    <input
      type="checkbox"
      className={styles.TodoList__checkbox}
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className={styles.TodoList__text}>{text}</p>
    <IconButton className={styles.TodoList__button} onClick={onDelete} >
      <DeleteIcon width="40" height="40" fill="white"/>
    </IconButton>

    {/* <button 
      className={styles.TodoList__button} 
      onClick={onDelete}
      >Видалити
    </button> */}
  </>    
);


export default Todo;