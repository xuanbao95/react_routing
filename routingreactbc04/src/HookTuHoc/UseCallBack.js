import React, { useState, useCallback } from 'react'
import ChildUseCallack from './ChildUseCallack'

export default function UseCallBack(props) {
    let [like, setLike] = useState(1);
    let renderNotify = () => {
        return `Bạn đã thả ${like}♥`
    }
    //useCallback dùng cho hàm khi cần thay đỏi props
    const callBack = useCallback(renderNotify, [like])//tham số 1 là hàm ko cần render lại mối khi setstate-tham sô thứ 2 là giá trị thay đổi để tham số 1 chạy
    return (

        <div className="container mt-5">
            like:{like}♥
            <br />
            <span style={{ cursor: 'pointer', color: "pink" }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>

            <br />
            <br />
            <ChildUseCallack renderNotify={callBack} />
        </div>
    )
}
