import React from "react";

class ClassComponent extends React.Component {
    state = {
        count: 0,
    }

    // state 세팅
    add = () => {
        this.setState({ count: this.state.count + 1 });
        // this.setState( current => ({count: current.count + 1}));
        console.log('+');
    }

    minus = () => {
        this.setState({ count: this.state.count-1 });
        // this.setState( current => ({count: current.count - 1}));
        console.log('-');
    }

    // 클래스 컴포넌트에서 반드시 구현해야 하는 메소드
    render() {
        return (
            <div>
                <h2> 현재 값 : {this.state.count} </h2>
                <button onClick={this.add}> 더하기 </button>
                <button onClick={this.minus}> 빼기 </button>
            </div>
        );
    }
}

export default ClassComponent;