import * as ActionType from "./../constants/actionType";

let initialState = {
  danhSachGV: [],
  danhSachHV: [],
};

const nguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LAY_DANH_SACH_GV:
      state.danhSachGV = action.danhSachGV;
      return { ...state };

    case ActionType.LAY_DANH_SACH_HV:
      state.danhSachHV = action.danhSachHV;
      return { ...state };

    case ActionType.FILTER_USER:
      state.danhSachHV = action.danhSachHV;
      return { ...state };

    default:
      return { ...state };
  }
};

export default nguoiDungReducer;
