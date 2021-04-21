import React, { useMemo, useState } from 'react'
import ChildMemo from './ChildMemo';

export default function UseMemo(props) {
    let [like, setLike] = useState(1);
    let renderCart = () => {
        let cart = [
            { id: 1, name: "iphone", price: 1000 },
            { id: 2, name: "samsung", price: 2000 },
            { id: 3, name: "htc", price: 3000 },
        ]
        return cart;
    };
    //dùng truyền hàm trả về gí trị

    //thông số thứ nhất phải là cái objeck
    const cartMemo = useMemo(() => renderCart, [])
    return (
        <div className="mt-5">
            like :{like} ♥
            <br />
            <span style={{ cursor: "pointer", color: "red", fontSize: "30px" }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <ChildMemo cart={cartMemo} />
        </div>
    )
}
