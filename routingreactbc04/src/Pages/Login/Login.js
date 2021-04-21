import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { dangNhapAction } from '../../redux/action/NguoiDungAction';
export default function Login(props) {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',

        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('tài khoản ko được bỏ trống'),
            matKhau: Yup.string().required('mật khẩu ko được bỏ trống'),//min(6, 'mật khẩu tối thiểu 6 ký tự').max(32, 'mật khẩu tối đa 32 ký tự'), //.test(/tryền regex vào để ktra dử liệu nhập/,'mật khẩu ko đúng định dạng'),
        })
        , onSubmit: values => {
            console.log(values);
            //gọi hàm dangNMhapAction => trả về function
            let action = dangNhapAction(values)

            dispatch(action)
        },
    });

    return (
        <form className="container" onSubmit={formik.handleSubmit} >
            <h3>Login</h3>
            <div className="form-group">
                <p>Tài Khoản</p>
                <input className="form-control" onChange={formik.handleChange} name="taiKhoan" />
                {formik.touched && formik.errors.taiKhoan ? <p className="text-danger">{formik.errors.taiKhoan}</p> : ''}
            </div>
            <div className="form-group">
                <p>mật Khẩu</p>
                <input className="form-control" onChange={formik.handleChange} name="matKhau" />
                {formik.touched && formik.errors.matKhau ? <p className="text-danger">{formik.errors.matKhau}</p> : ''}
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success" >Đăng Nhập</button>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success" > navLink đăng ký</button>
            </div>
        </form>
    )
}
