import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    /*---------- lifecycle 함수 Start ---------*/
    componentDidMount(){
        console.log(`habit: ${this.props.habit.name} mounted`);
    }

    componentWillUnmount(){
        console.log(`habit: ${this.props.habit.name} unmounted`);
    }
    /*---------- lifecycle 함수 End ---------*/

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        // habits.jsx에서 보내준 habits 데이터를 prop으로 받는다. (render 안에서만 받을 수 있네?)
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>  
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;