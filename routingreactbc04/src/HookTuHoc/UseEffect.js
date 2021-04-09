import React, { useState, useEffect, Children } from 'react'
import ChildEffect from './ChildEffect';

export default function UseEffect(props) {
    let [number, setNumber] = useState(1);
    let [like, setLike] = useState(1);
    console.log(like);
    //useEffect là hàm chạy sau khi render thay cho didMount và didUpDating trong mọi trường hợp
    // useEffect(() => {
    //     console.log("didMount");
    //     console.log("didUpDating");
    // })

    //cách viết thay đổi didMount
    useEffect(() => {
        console.log("didMount");
    }, [])
    //cách viết thay đổi componentDidUpdate
    useEffect(() => {
        console.log("useEffect này sẽ chạy");
        return () => {
            console.log("willUnMount");
        }
    }, [number])//number là giá trị sau khi render thì useEffect này sẽ chạy
    let handleIncrease = () => {
        let newNUmber = number + 1
        setNumber(newNUmber)
    }
    return (
        <div className="container">
            <div className="card text-left">
                <img style={{ width: "250px", height: "300px" }} className="card-img-top" src="https://storage.oxii.vn/thumbnail/OXII-958-2019-2-26/ke-ni-nang-hotgirl-lanh-lung-khong-bao-gio-nhoen-mieng-cuoi-anh-5.jpg" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">{number}♥</p>
                </div>
            </div>
            <button className="btn btn-danger" onClick={() => {
                setLike(like + 1)
            }}>like</button>
            <button className="btn btn-primary" onClick={handleIncrease}>+</button>
            {like === 1 ? <ChildEffect /> : ""}
        </div >
    )
}
