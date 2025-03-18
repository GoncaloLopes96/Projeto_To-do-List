import {FaCheckCircle, FaTrash} from "react-icons/fa";

type TodoProp = {
    todo:
        {
            id: number;
            text: string;
            completed: boolean;
        };
    completeTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
};

function Todo({todo,completeTodo,deleteTodo} : TodoProp ) {
    return (
        <div className="bg-purple-800 p-2 rounded-md flex justify-between items-center my-4 text-white">
            <p className={`${todo.completed === true ? "line-through" : ""}`}>{todo.text}</p>
            <div className="flex gap-2 items-center cursor-pointer">
                <FaCheckCircle className="hover:text-green-400" onClick={() => completeTodo(todo.id)} />
                <FaTrash className="hover:text-red-600" onClick={() => deleteTodo(todo.id) }/>
            </div>
        </div>
    );
}

export default Todo