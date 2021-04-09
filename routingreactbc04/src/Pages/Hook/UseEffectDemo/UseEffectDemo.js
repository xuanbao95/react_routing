import React, { useEffect, useState } from 'react'

export default function UseEffectDemo(props) {
    const [number, setNumber] = useState(1)
    //hook thay thế cho lifeCycle ComponenDidMount
    useEffect(() => {//tự động kích hoạt và chạy lần đầu tiên
        //callapi
        //sử dụng carousel, thư viện khác...
        console.log("ComponenDidMount");
        return () => {
            //hàm này thực thi trước khi component mất khỏi giao diện
            console.log('ComponentWillUnmount');
        }
    }, []);
    useEffect(() => {
        // gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('thay thế 2 lifeCycle componentDidMount và componentDidUpdate');
        //hạn chế setstate
    })
    useEffect(() => {
        // gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('componentDidUpdate bơi 1 state nào đó');
        //hạn chế setstate
    }, [number])
    return (
        <div>
            <h1>{number}</h1>
            <button className="btn btn-success" onClick={() => {
                setNumber(number + 1)
            }}>+</button>
        </div>
    )
}
