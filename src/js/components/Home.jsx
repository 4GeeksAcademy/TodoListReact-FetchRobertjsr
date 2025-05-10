import React, { useEffect, useState } from "react";
import { use } from "react";

export const Home = () => {

    const [task, setTask] = useState([]) // tarea
    const [draft, setDraft] = useState('') // el input

    //GET
    const URL_USER = 'https://playground.4geeks.com/todo/users/Chuchu'
    const getTask = async () => {
        const resp = await fetch(URL_USER)
        const data = await resp.json()
        setTask(data.todos)
    }

    //POST
    const URL_ADDTASK = 'https://playground.4geeks.com/todo/todos/Chuchu'
    const addTask = async (label) => {

        const bodyTask = {
            label,
            is_done: false
        }

        const resp = await fetch(URL_ADDTASK,
            {
                method: "POST",
                body: JSON.stringify(bodyTask),  // convertimos datos de json a stringify
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "token"
                }
            })
        const data = await resp.json()
        setTask([...task, data])
    }


    //DELETE
    const URL_DELETE = 'https://playground.4geeks.com/todo/todos/'
    const deleteTask = async (id) => {
        await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: 'DELETE'
        })
        setTask(task.filter(task => task.id !== id))
    }

    useEffect(() => {

        getTask()

    }, []);

    const tomarDatos = (e) => {
        const data = e.target.value
        setDraft(data)
    }

    const sendTaks = () => {
        const newTask = draft
        addTask(newTask)
        setDraft('')
    }

    const borrarDatos = (id) => {
        deleteTask(id)
    }

    return (
        <>
            <div className="to-do container">
                <div className="todo-form">
                    <h1>
                        <label form="example" >Todolist usando React y Fetch</label>
                    </h1>
                    <input type="text" value={draft} placeholder='Escribe tus tareas' name='example' onChange={tomarDatos} />

                    <button onClick={sendTaks}>Agregar Tarea</button>

                </div>
                <ul className="todo-list">
                    {
                        task.length > 0 ?
                            task.map((item) => (
                                <li key={item.id}>- Task: {item.label}
                                    <button className="btn btn-danger" onClick={() => borrarDatos(item.id)}>Borrar</button>
                                </li>
                            )) : <li> No hay tareas pendientes </li>
                    }
                </ul>
            </div>
        </>
    )
};

