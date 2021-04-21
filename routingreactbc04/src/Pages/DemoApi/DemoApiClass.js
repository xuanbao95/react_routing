import React, { Component } from 'react'
import axios from "axios";
export default class DemoApiClass extends Component {
    state = {
        mangPhim: []
    }
    loadfilm = async () => {
        // dùng promise khi api trả về sau ko phụ thuộc vào api trước-còn api cần có trước để api sau láy dử liệu render thì dùng async await
        //cách 1 :sử dụng promise
        // // hàm gọi api lấy dữ liệu từ backend trả về
        // const promise = axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // });
        // //hàm xử lý
        // promise.then(result => {
        //     //sau khi có kết quả setstate
        //     this.setState({
        //         mangPhim: result.data
        //     })
        // }).catch(erros => {//hàm xử lý dử liệu khi respone thất bại
        //     console.log(erros);
        // })
        // // promise.catch(erros => {

        // // })


        //cách 2 :sử dụng async await
        try {//es7
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            this.setState({
                mangPhim: result.data
            })
        } catch (erros) {
            console.log(erros);
        }

    }
    renderFilm = () => {
        return this.state.mangPhim.map((item, index) => {
            return (
                <div className="col-md-3">
                    <div className="card text-left">
                        <div>
                            <img className="card-img-top" src={item.hinhAnh} alt="123" style={{ width: '100%', position: 'relative' }} />
                            <a style={{ cursor: 'pointer', borderRadius: '50px', width: '50px', height: '50px', position: 'absolute', top: '100px', left: '50px' }} href={item.trailer}><i class="fa fa-play" aria-hidden="true"></i></a>

                        </div>

                        <div className="card-body">
                            <h4 className="card-title">{item.tenPhim}</h4>
                            <p className="card-text">Body</p>
                        </div>
                    </div>

                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                {/* <button className="btn btn-success" onClick={() => {
                    this.loadfilm()
                }}>Load Danh sách film</button> */}
                <h3 className="text-center">Danh Sách film</h3>
                <div className="row">
                    {this.renderFilm()}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.loadfilm();
    }
}
