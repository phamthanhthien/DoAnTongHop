import Home from "./pages/home/Home";
import About from "./pages/home/About";
import DanhSachKhoaHoc from "./pages/home/DanhSachKhoaHoc";
import ChiTietKhoaHoc from "./pages/home/ChiTietKhoaHoc";

import Cart from "./pages/home/Cart";
import Checkout from "./pages/home/Checkout/Checkout";
import Contact from "./pages/home/Contact";
import Login from "./pages/home/Login";
import SignUp from "./pages/home/Signup";

const routesHome = [
  {
    path: "/login",
    exact: false,
    component: Login,
  },
  {
    path: "/",
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    exact: false,
    name: "About",
    component: About,
  },
  {
    path: "/courses",
    exact: false,
    name: "Courses",
    component: DanhSachKhoaHoc,
  },
  {
    path: "/contact",
    exact: false,
    name: "Contact",
    component: Contact,
  },
  {
    path: "/shopping-cart",
    exact: false,
    name: "Shopping Cart",
    component: Cart,
  },
  {
    path: "/checkout",
    exact: false,
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/courses-detail/:id",
    exact: false,
    component: ChiTietKhoaHoc,
  },
  {
    path: "/signup",
    exact: false,
    component: SignUp,
  },
];

const routesAdmin = [];

export { routesHome, routesAdmin };
