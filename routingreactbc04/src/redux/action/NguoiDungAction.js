import axios from 'axios'
import { history } from '../../App'
import { ACCESSTOKEN, USER_LOGIN } from '../../util/setting';


export const dangNhapAction = (userLogin) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: userLogin
            });
            console.log(result.data);
            dispatch({
                type: "DANG_NHAP",
                tenDangNhap: result.data.taiKhoan,

            });
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
            localStorage.setItem(ACCESSTOKEN, result.data);
            alert('Đăng nhập thành công!')
            history.push('/home')
        } catch (erros) {
            console.log(erros.response?.data);
            //?: optional chaining
        }
    }
}
export const datVe = (thongTinDatVe) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: 'POST',
                data: thongTinDatVe,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            });
            console.log(result.data);
        } catch (erros) {
            console.log(erros);
        }
    }
}