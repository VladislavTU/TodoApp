import styles from "./Todo.module.css";

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo}>
      <div>{todo}</div>
      <button onSubmit={deleteTodo(index)}>Удалить</button>
    </div>
  );
}

export default Todo;
