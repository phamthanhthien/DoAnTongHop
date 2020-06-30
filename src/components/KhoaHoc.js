/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const KhoaHoc = ({ khoaHoc, actionFunction }) => {
  const aleart2 = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add to cart!",
    }).then(() => {
      return MySwal.fire(
        "Add to cart!",
        "Your course has been add to cart.",
        "success"
      );
    });
  };

  return (
    <div className="col-lg-4 col-md-6 course-grid">
      <div className="course-grid-inf">
        <NavLink to={`/courses-detail/${khoaHoc.maKhoaHoc}`}>
          <img src={khoaHoc.hinhAnh} className="img-fuild" alt="" />
        </NavLink>
        <div className="course-content">
          <div className="course-info">
            <NavLink
              to={`/courses-detail/${khoaHoc.maKhoaHoc}`}
              className="course-titlegulp-wrapper"
            >
              <h3 className="course-title">{khoaHoc.tenKhoaHoc}</h3>
            </NavLink>
          </div>
          <div className="course-divider">
            <div className="course-meta grid">
              <span className="course-students">
                <span className="fa fa-user" aria-hidden="true" /> 46
              </span>
              <span className="course-reviews">
                <span className="fa fa-thumbs-o-up" aria-hidden="true" /> 14
              </span>
            </div>
            <NavLink
              className="btn btn-success"
              to={`/courses-detail/${khoaHoc.maKhoaHoc}`}
            >
              Info
            </NavLink>
            <button
              className="price-course btn"
              onCSubmitk={aleart2}
              onClick={() => actionFunction(khoaHoc)}
            >
              $300
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KhoaHoc;
