// #2. Todo Item 작성
import { ToDoItem } from '../types/types';
import '../styles/TodoList.scss';

// TodoItem의 props 타입 정의
// {todo} => {todo: {id, text, completed}}
interface Props {
    todo: ToDoItem;
    toggleComplete: (id: number) => void;
}

// #6. toggleComplete prop 추가하기
export default function TodoItem({ todo, toggleComplete }: Props) {
    return (
        // #7. CSS 추가!
        <li className={todo.completed ? 'completed' : ''}>
            <label>
                <input
                    type="checkbox"
                    defaultChecked={todo.completed}
                    // #6. 토글
                    onChange={() => toggleComplete(todo.id)}
                />
                {todo.text}
            </label>
        </li>
    );
}
