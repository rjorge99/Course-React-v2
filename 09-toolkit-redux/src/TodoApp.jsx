import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    console.log(todo);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <pre>{JSON.stringify(todo, null, 3)}</pre>
            <button onClick={() => setTodoId((t) => t - 1)}>Prev</button>
            <button onClick={() => setTodoId((t) => t + 1)}>Next</button>
            {/* <ul> */}
            {/*     {todos.map((todo) => ( */}
            {/*         <li key={todo.id}> */}
            {/*             <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong> */}
            {/*             {todo.title} */}
            {/*         </li> */}
            {/*     ))} */}
            {/* </ul> */}
        </>
    );
};
