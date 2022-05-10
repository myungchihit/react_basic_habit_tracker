import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class app extends Component {

  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'Running', count: 0},
        { id: 3, name: 'Coding', count: 0},
    ]
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){   // 변경하는 habit의 id가 같다면 새로 만들어줌
        return {...habit, count: habit.count + 1};
      }
      return item;
    });
    //this.setState({habits: habits});  // 키와 value와 같으면 아래와 같이 생략가능
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
      const habits = this.state.habits.map(item => {
        if(item.id === habit.id){
          const count = habit.count - 1;
          return {...habit, count: count < 0 ? 0 : count };
        }
        return item;
      });
      this.setState({ habits });
  };

  handleDelete = (habit) => {
      // 현재 클릭한 habit을 제외한 habit들의 새로운 배열을 만들어서 
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){   // 0이 아닌것만 update 시키기 위해서
        return {...habit, count: 0};
      }
      return habit;
    })
    this.setState({habits});
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits habits={this.state.habits}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onAdd={this.handleAdd}
                onReset = {this.handleReset}
        />
      </>
    );
  }
}

export default app;