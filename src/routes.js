import Home from "./pages/home/Home";
import About from "./pages/home/About";
import DanhSachKhoaHoc from "./pages/home/DanhSachKhoaHoc";
import ChiTietKhoaHoc from "./pages/home/ChiTietKhoaHoc";

import HomeAdmin from "./pages/admin/HomeAdmin";
import UserManagerment from "./pages/admin/user-management/UserManagerment";
import ThemKhoaHoc from "./pages/admin/ThemKhoaHoc";
import Cart from "./pages/home/Cart";
import Checkout from "./pages/home/Checkout";
import Contact from "./pages/home/Contact";

const routesHome = [
  {
    path: "/",
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: "/about",
    exact: false,
    name: 'About',
    component: About,
  },
  {
    path: "/courses",
    exact: false,
    name: 'Khóa học',
    component: DanhSachKhoaHoc,
  },
  {
    path: "/courses-detail/:id",
    exact: false,
    component: ChiTietKhoaHoc,
  },
  {
    path: "/gio-hang",
    exact: false,
    component: Cart,
  },
  {
    path: "/checkout",
    exact: false,
    component: Checkout,
  },
  {
    path: "/contact",
    exact: false,
    name: 'Contact',
    component: Contact,
  },
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: HomeAdmin,
  },
  {
    path: "/admin/user-managerment",
    exact: false,
    component: UserManagerment,
  },
  {
    path: "/admin/them-khoa-hoc",
    exact: false,
    component: ThemKhoaHoc,
  },
];

export { routesHome, routesAdmin };
