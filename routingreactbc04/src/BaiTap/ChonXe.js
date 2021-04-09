import React, { useState } from 'react'

export default function ChonXe(props) {
    let [car, setCar] = useState({ img: "./img/car/products/black-car.jpg" })
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={car.img} alt="123" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-danger ml-3" onClick={() => {

                        setCar({
                            img: "./img/car/products/red-car.jpg"
                        })
                    }}>Red</button>
                    <button className="btn ml-3" style={{ backgroundColor: "gray" }} onClick={() => {

                        setCar({
                            img: "./img/car/products/steel-car.jpg"
                        })
                    }}>steel</button>
                    <button className="btn ml-3" style={{ backgroundColor: "silver" }} onClick={() => {

                        setCar({
                            img: "./img/car/products/silver-car.jpg"
                        })
                    }}>Silver</button>
                    <button className="btn btn-dark ml-3" onClick={() => {

                        setCar({
                            img: "./img/car/products/black-car.jpg"
                        })
                    }}>Black</button>
                </div>
            </div>
        </div >
    )
}
