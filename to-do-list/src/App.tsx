import {useState} from 'react'
import './App.css'
import Todo from "./Todo.tsx";

type Todos = {
    id: number;
    text: string;
    completed: boolean;
}

function App() {

    const [input, setInput] = useState<string>("");

    const [todos, setTodos] = useState<Todos[]>([]);

    const addTodo = () => {

        if (!input.trim()) return; // If the input is empty, do nothing
        const newTodos = {
            id: Date.now(),
            text: input,
            completed: false
        }
        setTodos((prevTodos) => [...prevTodos, newTodos])
        setInput(""); // Clear the input field

    };

    const completeTodo = (id: number) => {

        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: true} : todo
            )
        );
    };

    const deleteTodo = (id: number) => {

        setTodos(
            todos.filter((todo) => todo.id !== id)
        );

    };

    return (
        <div className='bg-purple-950 p-2 min-h-screen flex justify-center items-center'>
            <div className="max-w-[500px] w-[90%] bg-slate-900 p-4 rounded-md shadow-md">
                <h1 className="text-center text-white text-2xl">Tarefas para Hoje</h1>
                <div className="flex gap-2 justify-center my-8">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type='text'
                        placeholder="Adicione uma tarefa"
                        className="flex-[3] border-2 outline-none border-gray-500 text-white placeholder-gray-500 p-2 rounded-md focus:border-white"/>
                    <button
                        onClick={addTodo}
                        className="flex-[1] bg-purple-800 cursor-pointer rounded-md text-sm hover:bg-purple-900 text-white">Adicionar Tarefa
                    </button>
                </div>
                <div>
                    <h1 className="text-center text-white text-xl font-bold">Tarefas</h1>
                    {todos.length > 0 ? (
                        <>
                            {todos.map((todo) => {
                                return <Todo
                                    key={todo.id}
                                    todo={todo}
                                    completeTodo={completeTodo}
                                    deleteTodo={deleteTodo}
                                />;
                            })}
                        </>
                    ) : (
                        <h1 className= "text-center text-white text-xl my-2"  >Completou todas as tarefas</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
