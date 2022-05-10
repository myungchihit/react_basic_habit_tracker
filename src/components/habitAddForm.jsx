import React, {memo} from 'react';

const HabitAddForm = memo(
    (props) => {  // 함수형 컴포넌트로 변경함

        // 함수에서는 변수에 타입형을 지정
        // class가 아니기 때문에 this를 붙이지 않고 멤버변수 바로 넣으면됨.
        // PureComponent가 없기 때문에 대체로 memo를 쓴다.
        // 사용방법은 memo안에다가 함수를 구현해줌.
    
        // input값을 document.querySelector로 dom요소에 접근해서 value값 구하는거 리액트에서는 안해도 됨.
        // React.createRef() 사용하면 Ref라는 Object가 생기고 해당 태그에 연결시키면 값을 가져올 수 있다.
        const formRef = React.createRef();  
        const inputRef = React.createRef();
    
        const onSubmit = (event) => {
            // 새로고침 제거
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            //this.inputRef.current.value = '';
            formRef.current.reset(); // 이게 정석
        }
    
        return (
            <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                <input ref={inputRef} type="text" className="add-input" paceholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
);

export default HabitAddForm;


/*
// PureComponent -> props과 state안에 들어 있는 데이터가 
//                 최상위에 있는 데이터가 변하지 않으면 Rendering안됨
class HabitAddForm extends PureComponent {  // class형 컴포넌트

    // input값을 document.querySelector로 dom요소에 접근해서 value값 구하는거 리액트에서는 안해도 됨.
    // React.createRef() 사용하면 Ref라는 Object가 생기고 해당 태그에 연결시키면 값을 가져올 수 있다.
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        // 새로고침 제거
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset(); // 이게 정석
    }

    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" paceholder="Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
*/ 