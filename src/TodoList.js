import React from 'react';
import {AppContext} from './AppContext';

export const TodoList = () => {
    let deleteButton = {
        marginLeft:15,
        border: '1px solid black'
    }
    return (
    <AppContext.Consumer>
        {context => (
            
            <div>
                {context.store.todos.map((task,i) => (   
                <li key={i}>{task} 
                <span 
                onClick = {() => context.actions.deleteTask(i)} 
                style={deleteButton}>X</span></li>
                ))}
                <button onClick={() => console.log(context.store) || context.actions.addTask('I am the task' + " " + context.store.todos.length)}>+ add</button>
            </div>
        )}
    </AppContext.Consumer>
    )
}