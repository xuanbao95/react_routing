import React, { useState } from 'react'

export default function UseState(props) {
    //(1) this.state={like:0}
    //(2) this.setState
    //(3) function ko co thuộc tính this.==> class mới có
    //tuple
    let [state, setState] = useState({ like: 0 });
    let handelLike = () => {
        //tăng like lên 1 và set lại state
        //nhớ là ko có con trỏ this.
        setState({
            like: state.like + 1
        })
    }
    return (
        <div>
            <div className="card text-left">
                <img className="card-img-top" src="http://picsum.photos/1000/1000" alt="1230" style={{ width: "250px", height: "250px" }} />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text text-danger">{state.like}♥</p>
                </div>
            </div>
            <button className="btn btn-danger" onClick={handelLike}>like</button>
        </div>

    )
}
