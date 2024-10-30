import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodo} from "../features/todo/todoSlice";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-fulljustify-center">
                {todos.map((todo) => (
                    <div
                        className={`mt-4 flex justify-between items-center  px-4 py-2 rounded w-2/3 mx-auto bg-zinc-800 ${
                            todo.complete ? "ring-2 ring-red-900" : ""
                        }`}
                        key={todo.id}
                    >
                            <div className="text-white w-[85%] overflow-hidden">{todo.text}</div>
                        
                        <div className="flex gap-4">
                            <button
                                onClick={() => dispatch(completeTodo(todo.id))}
                                className="text-white text-xl bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <FaSave />
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white text-xl bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <MdDelete />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todos;
