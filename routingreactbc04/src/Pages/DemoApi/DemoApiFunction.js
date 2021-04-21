import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function DemoApiFunction(props) {
    const [mangFilm, setmangFilm] = useState([]);
    useEffect(async () => {
        //hàm chạy sau khi render
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            setmangFilm(result.data)
        } catch (erros) {
            console.log(erros);
        }


    }, [])
    const renderFilm = () => {
        return mangFilm.map((item, index) => {
            return (
                <div className="col-md-3" key={index}>
                    <div className="card text-left">
                        <div>
                            <img className="card-img-top" src={item.hinhAnh} alt="123" style={{ width: '100%', position: 'relative' }} />
                            <a style={{ cursor: 'pointer', borderRadius: '50px', width: '50px', height: '50px', position: 'absolute', top: '100px', left: '50px' }} href={item.trailer}><i class="fa fa-play" aria-hidden="true"></i></a>

                        </div>

                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>

                        </div>
                    </div>

                </div>
            )
        })
    }
    return (
        <div className="container">
            <h3 className="text-center">Danh Sách film</h3>
            <div className="row">
                {renderFilm()}
            </div>
        </div>
    )
}
