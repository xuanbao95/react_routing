import axios from 'axios'
//tổng hợp tất cả action của ứng dụng
export const LayDanhSachPhimApiAction = (maNhom = 'GP01') => {
    return async (dispatch) => {
        //hàm chạy sau khi render
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
                method: 'GET'
            });
            //dispatch dử liệu lên redux
            dispatch({
                type: "SET_MANG_FILM",
                mangFilm: result.data
            })

        } catch (erros) {
            console.log(erros);
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            //sau khi gọi api dispatch lên reducer đử liệu chi tiết phim
            dispatch({
                type: "SET_CHI_TIET_PHIM",
                chiTietPhim: result.data
            })
        } catch (erro) {
            console.log(erro);
        }
    }
}