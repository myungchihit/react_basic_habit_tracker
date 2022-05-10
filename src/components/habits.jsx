import React, { Component } from 'react';
import Habit from './habit'
import HabitAddForm from './habitAddForm';

class Habits extends Component {

    handleIncrement = habit => {
        this.props.onIncrement(habit);
    }

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    }

    handleDelete = habit => {
        this.props.onDelete(habit);
    }

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    {
                        this.props.habits.map(habit => 
                            // habit.jsx에 habits를 전달 (Props)
                            // 각 component들은 고유한 키값을 가지는것이 좋다. --> 리엑트 랜더링시 성능 개선을 위하여.
                            // key값을 배열의 인덱스 값으로 주면 절대안됨. --> object의 고유한 속성값을 넣어줘야함.
                            <Habit key={habit.id} habit={habit} 
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />  
                        )
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
   }
}

export default Habits;