import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { LayDanhSachPhimApiAction } from '../../redux/action/PhimAction';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';
export default function Home(props) {
    //useSelector :dùng để lây state từ redux về
    const { mangFilm } = useSelector(state => state.phimReducer);
    const dispatch = useDispatch();
    useEffect(async () => {
        //action bắt buộc
        //1:object={type:'',data}
        //2:function hoặc async function
        dispatch(LayDanhSachPhimApiAction('GP01'))

    }, [])
    const renderFilm = () => {
        return mangFilm.map((item, index) => {
            return <div className="col-md-3" key={index}>
                <div className="card text-left">
                    <div>
                        <img className="card-img-top" src={item.hinhAnh} alt="123" style={{ width: '100%', position: 'relative' }} />
                        <a style={{ cursor: 'pointer', borderRadius: '50px', width: '50px', height: '50px', position: 'absolute', top: '100px', left: '50px' }} href={item.trailer}><i class="fa fa-play" aria-hidden="true"></i></a>

                    </div>

                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <NavLink className="btn btn-danger" to={`/detail/${item.maPhim}`}>Đặt vé</NavLink>
                    </div>
                </div>

            </div>
        })

    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    console.log(mangFilm);
    return (
        <div className="container">
            <Carousel afterChange={onChange}>
                <div style={contentStyle}>
                    <img src="http://picsum.photos/1000/1000" alt="" />
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <img src="http://picsum.photos/1000/1000" alt="" />
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>,
            <h3 className="text-center">Danh Sách film</h3>
            <div className="row">
                {renderFilm()}
            </div>
        </div>
    )
}
