import * as ActionType from "./../constants/actionType";
// import Axios from "axios";
import { callAPI } from "./../../utils/CallAPI";

export const actGetListCourseAPI = () => {
  return (dispatch) => {
    callAPI("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08", "GET", null, null)
      .then((result) => {
        dispatch(actGetListCourse(result.data));
        console.log(result.data);        
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const actGetListCourse = (listCourse) => {
  return {
    type: ActionType.GET_LIST_COURSE,
    listCourse,
  };
};

export const actDetailCourseAPI = (id) => {
  return (dispatch) => {
    callAPI(
      `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
      "GET",
      null,
      null
    )
      .then((result) => {
        dispatch({
          type: ActionType.DETAIL_COURSE,
          course: result.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const actLoginAdmin = (user, history) => {
  return (dispatch) => {
    // Axios({
    //   method: "POST",
    //   url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
    //   data: user
    // })
    //   .then(result => {
    //     console.log(result.data);
    //     if (result.data.maLoaiNguoiDung === "GV") {
    //       localStorage.setItem("userAdmin", JSON.stringify(result.data));
    //       //Đá sang trang Dashboard Admin
    //       history.push("/admin/dashboard");
    //     } else {
    //       alert("Bạn không có quyền truy cập");
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err.response.data);
    //   });

    callAPI(`QuanLyNguoiDung/DangNhap`, "POST", user, null)
      .then((result) => {
        console.log(result.data);
        if (result.data.maLoaiNguoiDung === "GV") {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          //Đá sang trang Dashboard Admin
          history.push("/admin/dashboard");
        } else {
          alert("Bạn không có quyền truy cập");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const actLayDanhMucKhoaHoc = () => {
  return (dispatch) => {
    callAPI(`QuanLyKhoaHoc/LayDanhMucKhoaHoc`, "GET", null, null)
      .then((result) => {
        dispatch({
          type: ActionType.LAY_DANH_MUC_KHOA_HOC,
          danhMucKhoaHoc: result.data,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const actLayDanhSachGV = () => {
  return (dispatch) => {
    callAPI(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08`,
      "GET",
      null,
      null
    )
      .then((result) => {
        console.log(result);
        dispatch({
          type: ActionType.LAY_DANH_SACH_GV,
          danhSachGV: result.data.filter(
            (item) => item.maLoaiNguoiDung === "GV"
          ),
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const actLayDanhSachHV = () => {
  return (dispatch) => {
    callAPI(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08`,
      "GET",
      null,
      null
    )
      .then((result) => {
        console.log(result);
        dispatch({
          type: ActionType.LAY_DANH_SACH_HV,
          danhSachHV: result.data.filter(
            (item) => item.maLoaiNguoiDung === "HV"
          ),
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const saveUser = (user) => {
  return (dispatch) => {
    callAPI("QuanLyNguoiDung/ThemNguoiDung", "POST", user, null)
      .then((result) => {
        console.log(result);
        dispatch({
          type: ActionType.SAVE_USER,
          user,
        });
      })
      .catch((err) => {
        console.log(err.result.data);
      });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    callAPI(`QuanLyNguoiDung/XoaNguoiDung`, "DELETE", null, null)
      .then((result) => {
        console.log(result);
        dispatch({
          type: ActionType.DELETE_USER,
          user,
        });
      })
      .catch((err) => {
        console.log(err.result.data);
      });
  };
};

export const editUser = (user) => {
  return  {
    type: ActionType.EDIT_USER,
    user,
  };
};

export const onFilter = (keyword) => {
  return (dispatch) => {
    callAPI(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP08`, "GET", null, null)
      .then((result) => {
        console.log(result);
        dispatch({
          type: ActionType.FILTER_USER,
          keyword,
        });
      })
      .catch((err) => {
        console.log(err.result.data);
      });
  };
};

export const actThemKhoaHoc = (khoaHoc) => {
  const user = JSON.parse(localStorage.getItem("userAdmin"));
  let data = { ...khoaHoc, maNhom: "GP08", ngayTao: "19/10/2019" };
  let headers = {
    Authorization: `Bearer ${user.accessToken}`,
  };
  return (dispatch) => {
    callAPI("QuanLyKhoaHoc/ThemKhoaHoc", "POST", data, headers)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
