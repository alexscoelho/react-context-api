import React, {useState} from 'react';


export const AppContext = React.createContext(null)

export class ContextWrapper extends React.Component {
	constructor() {
	    super();
	    this.state = {
		store: {
			todos: ["Make the bed", "Take out the trash"]
		},
		actions: {
            addTask: title =>
            this.setState({ 
                store: {todos: this.state.store.todos.concat(title)
                }}
            ),
            deleteTask: taskIndex => 
                this.setState({
                    store: {todos: this.state.store.todos.filter((item,index) => taskIndex != index)}
                })
             
        }
	    };
	}
	render() {
		return (
		<AppContext.Provider value={this.state}>
	        	{this.props.children}
		</AppContext.Provider>
		);
	}
}