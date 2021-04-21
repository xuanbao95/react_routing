import React, { useReducer } from 'react'

const initalCart = [
    { id: 1, name: "iphone", price: 1000, quality: 1 }
]

const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart": {
            let newCart = [...state];
            let index = newCart.findIndex(sp => sp.id === action.item.id)
            if (index != -1) {
                newCart[index].quality += 1;
            } else {
                newCart.push(action.item)
            }
            state = newCart
            return [...state]
        }
        default: return [...state]
    }

}
let arrProduct = [
    { id: 1, name: "iphone", price: 1000, quality: 1 },
    { id: 2, name: "samsung", price: 2000, quality: 1 },
    { id: 3, name: "htc", price: 3000, quality: 1 },
    { id: 4, name: "xiaomi", price: 4000, quality: 1 },
]
export default function UseReducer(props) {
    //tham số đầu là 1 reducer-tham số 2 là state
    let [cart, dispatch] = useReducer(cartReducer, initalCart);
    let addToCart = (itemClick) => {
        let action = {
            type: "addToCart",
            item: itemClick
        }
        dispatch(action)
    }
    return (
        <div className="container">
            <div className="row">
                {arrProduct.map((item, index) => {
                    return <div className="col-md-3">
                        <div className="card text-left">
                            <img className="card-img-top" src="http://picsum.photos/1000/1000" alt="123" style={{ width: "100%", }} />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.price}</p>
                                <button className="btn btn-success" onClick={() => { addToCart(item) }}>Add cart</button>
                            </div>
                        </div>

                    </div>
                })}
            </div>
            <h3>Giỏ hàng</h3>
            <table className="table">
                <thead>
                    <tr>id</tr>
                    <tr>name</tr>
                    <tr>price</tr>
                    <tr>quality</tr>
                    <tr></tr>
                </thead>
                <tbody>

                    {cart.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quality}</td>
                            <td>{item.price * item.quality}</td>
                            <td><button className="btn btn-danger">X</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
