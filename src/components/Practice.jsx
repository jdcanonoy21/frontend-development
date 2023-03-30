import { useState } from 'react';

const Practice = () => {
  const [todoList, setTodoList] = useState([
    { todoid: 1, todo: 'test1' },
    { todoid: 2, todo: 'test2' },
    { todoid: 3, todo: 'test3' },
    { todoid: 4, todo: 'test4' },
    { todoid: 5, todo: 'test5' },
  ]);

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.todoid !== id));
  };
  return (
    <div className="box">
      <ul>
        {todoList.map((todo) => (
          <li key={todo.todoid}>
            {todo.todo}{' '}
            <button onClick={() => handleDelete(todo.todoid)}>delete</button>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;
