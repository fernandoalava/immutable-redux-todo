import React from 'react'

export class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const todoText = this.props.todo.get('text')
        const isDone = this.props.todo.get('isDone')
        if(isDone) {
            return <strike>{todoText}</strike>;
        } else {
            return <span>{todoText}</span>;
        }
    }
}

export class TodoList extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(id){
        this.props.toggleTodo(id);
    }

    handleSubmit(event){
        
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;
        if(isEnterKey && isLongEnough){
            input.value = ''
            this.props.addTodo(text);
        }
    }

    render(){
        return (
            <div className='todo'>
                <input type='text' placeholder='Add todo' onKeyDown={this.handleSubmit}/>
                <ul className='todo__list'>
                    {this.props.todos.map(t => 
                        (
                            <li key={t.get('id')} className='todo__item' onClick={() => this.handleToggleClick(t.get('id'))}>
                                <Todo todo={t} />
                            </li>
                        )
                    )
                }
                </ul>
            </div>
        );
    }
}
