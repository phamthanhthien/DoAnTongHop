import Home from "./pages/home/Home";
import About from "./pages/home/About";
import DanhSachKhoaHoc from "./pages/home/DanhSachKhoaHoc";
import ChiTietKhoaHoc from "./pages/home/ChiTietKhoaHoc";

import HomeAdmin from "./pages/admin/HomeAdmin";
import UserManagerment from "./pages/admin/user-management/UserManagerment";
import ThemKhoaHoc from "./pages/admin/ThemKhoaHoc";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: false,
    component: About
  },
  {
    path: "/danh-sach-khoa-hoc",
    exact: false,
    component: DanhSachKhoaHoc
  },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    exact: false,
    component: ChiTietKhoaHoc
  },
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: HomeAdmin
  },
  {
    path: "/admin/user-managerment",
    exact: false,
    component: UserManagerment
  },
  {
    path: "/admin/them-khoa-hoc",
    exact: false,
    component: ThemKhoaHoc
  }
];

export { routesHome, routesAdmin };
