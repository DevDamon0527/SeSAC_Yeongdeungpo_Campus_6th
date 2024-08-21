import React, { useState, useRef } from 'react';
import { ToDoItem } from '../types/types';
import TodoItem from './TodoItem';

export default function TodoList() {
    const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록
    // #3. 투두 추가
    const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
    // #4. 포커싱
    const inputRef = useRef<HTMLInputElement>(null);
    // <HTMLInputElement> 참조하려는 DOM 요소의 타입을 지정.
    // 즉, input 요소를 참조하고 있음을 의미.

    // (참고)
    // 초기값 'null' 설정
    // useRef의 초기 값으로 null을 설정합니다.
    // 이는 초기 렌더링 시에 inputRef가 아직 실제 DOM 요소를 참조하지 않기 때문에 null로 시작함을 의미합니다.
    // 이후 컴포넌트가 렌더링되면, inputRef의 current 속성은 해당 DOM 요소를 참조하게 됩니다.

    // #3. 투두 추가
    const addTodo = () => {
        const updatedTodos = [
            ...todos,
            { id: Date.now(), text: newTodo, completed: false },
        ];
        setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
        setNewTodo(''); // input 초기화
    };

    // #6. 토글
    // 투두 아이템 완료 상태 변경 함수
    const toggleComplete = (targetId: number) => {
        // console.log(`${id}번 투두 완료 상태 수정됨!!`);
        const updatedTodos = todos.map((todo) => {
            return todo.id === targetId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setTodos(updatedTodos);
    };

    // #4. 포커싱
    // useRef로 생성한 inputRef를 사용해 입력창에 포커싱
    const focusInput = () => {
        // if (inputRef.current) {
        //   inputRef.current.focus();
        // }
        inputRef.current?.focus();
        // 컴포넌트가 렌더링 되면 'inputRef.current' 참조 객체는 <input> DOM 요소를 참조하게 됨.
        // 존재하면 포커싱
    };

    // #5. 엔터키
    // key down event 입력시 투두 추가
    // https://react-typescript-cheatsheet.netlify.app/ type 설명
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    // #3. 투두 추가
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    // #5. 엔터키
                    onKeyDown={handleKeyDown} // 엔터키 이벤트 핸들러 추가
                    placeholder="add new todo!"
                    // #4. 포커싱
                    ref={inputRef} // ref 연결
                />
                <button onClick={addTodo}>ADD</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // #6. 토글
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
}
