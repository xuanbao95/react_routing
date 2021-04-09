import React, { useState } from 'react'
//useState(): là hàm từ thư viện react thay thế this.state và this.setState của react class component
export default function UseStateDemo(props) {
    let [state, setState] = useState({ number: 1 });
    let [number, setNumber] = useState(1)
    /**
     * this.state={
     * number:1
     * }
     */
    return (
        <div className="container">
            <h1>Number:{number}</h1>
            <button className="btn btn-success" onClick={() => {
                setNumber(
                    number + 1
                )
            }} >+</button>
            <h1>{state.number}</h1>
            <button className="btn btn-success" onClick={() => {
                let newState = { number: state.number + 1 }
                // setState({
                //     number:  state.number + 1
                // })
                setState(newState);
            }} >+</button>
        </div>
    )
}
