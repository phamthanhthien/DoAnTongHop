import React from "react";
import { NavLink } from "react-router-dom";

const KhoaHoc =({ khoaHoc }) =>  {

  return (
    // <div className="col-sm-4">
    //   <div className="card">
    //     <img className="card-img-top" src={khoaHoc.hinhAnh} alt="" />
    //     <div className="card-body">
    //       <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
    //       <p className="card-text">{khoaHoc.moTa}</p>
    //       <NavLink
    //         className="btn btn-success"
    //         to={`/couser-detail/${khoaHoc.maKhoaHoc}`}
    //       >
    //         Chi tiết
    //       </NavLink>
    //     </div>
    //   </div>
    // </div>

    <div className="col-lg-4 col-md-6 course-grid">
      <div className="course-grid-inf">
        <NavLink to="/">
          <img src={khoaHoc.hinhAnh} className="img-fuild" alt="" />
        </NavLink>
        <div className="course-content">
          <div className="course-info">
            <NavLink to="/" className="course-titlegulp-wrapper">
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
            <button className="price-course btn"> $300 </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default  KhoaHoc;