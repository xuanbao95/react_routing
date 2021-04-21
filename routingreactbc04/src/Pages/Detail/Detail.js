import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinPhimAction } from '../../redux/action/PhimAction';
export default function Detail(props) {//function luôn có 3 props là props.history,props.location,props.match khi load ra từ thẻ route
    const { chiTietPhim } = useSelector(state => state.phimReducer);
    ///khai báo dispatcher
    const dispatch = useDispatch();
    //lấy tham số từ url id
    const id = props.match.params.id;
    useEffect(() => {
        dispatch(layThongTinPhimAction(id))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-100" src={chiTietPhim.hinhAnh} alt="123" />
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên Phim</th>
                                <th>{chiTietPhim.tenPhim}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
