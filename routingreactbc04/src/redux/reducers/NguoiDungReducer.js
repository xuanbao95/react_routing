let tdn = ''
if (localStorage.getItem('userLogin')) {
    let userLogin = JSON.parse(localStorage.getItem('userLogin'));
    tdn = userLogin.taiKhoan
}

const stateDefault = {
    tenDangNhap: tdn,
    tenDangKy: ''
}

export const NguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DANG_NHAP": {
            state.tenDangNhap = action.tenDangNhap
            return { ...state }
        }


        default: return { ...state }
    }
}