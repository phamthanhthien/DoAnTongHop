import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class NavbarAdmin extends Component {
  render() {
    return (
      // <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="/collapsibleNavbar"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   {/* Navbar links */}
      //   <div className="collapse navbar-collapse" id="collapsibleNavbar">
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <NavLink
      //           exact
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/"
      //         >
      //           Home
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/admin/dashboard"
      //         >
      //           Dashboard
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/admin/them-nguoi-dung"
      //         >
      //           Them Nguoi Dung
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/admin/them-khoa-hoc"
      //         >
      //           Them Khoa Hoc
      //         </NavLink>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      <section>
        <div>
          {/* sidebar menu start */}
          <div className="sidebar-menu sticky-sidebar-menu">
            {/* logo start */}
            <div className="logo">
              <h1>
                <Link to="">Collective</Link>
              </h1>
            </div>
            {/* if logo is image enable this */}
            {/* image logo --
  <div class="logo">
    <NavLink to="index">
      <img src="image-path" alt=""="Your logo" title="Your logo" class="img-fluid" style="height:35px;" />
    </NavLink>
  </div>
  <!-- //image logo */}
            <div className="logo-icon text-center">
              <NavLink to="/" title="logo">
                <img src="assets/images/logo.png" alt="logo-icon" />
              </NavLink>
            </div>
            {/* //logo end */}
            <div className="sidebar-menu-inner">
              {/* sidebar nav start */}
              <ul className="nav nav-pills nav-stacked custom-nav">
                <li className="active">
                  <NavLink to="/admin/dashboard">
                    <i className="fa fa-tachometer" /><span> Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/user-managerment">
                    <i className="fa fa-table" /> <span>User</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <i className="fa fa-th" /> <span>Content blocks</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <i className="fa fa-file-text" /> <span>Forms</span>
                  </NavLink>
                </li>
              </ul>
              {/* //sidebar nav end */}
              {/* toggle button start */}
              {/* <NavLink to="/" className="toggle-btn">
                <i className="fa fa-angle-double-left menu-collapsed__left">
                  <span>Collapse Sidebar</span>
                </i>
                <i className="fa fa-angle-double-right menu-collapsed__right" />
              </NavLink> */}
              {/* //toggle button end */}
            </div>
          </div>
          {/* //sidebar menu end */}
          {/* header-starts */}
          <div className="header sticky-header">
            {/* notification menu start */}
            <div className="menu-right">
              <div className="navbar user-panel-top">
                <div className="search-box">
                  <form action="/search-results" method="get">
                    <input
                      className="search-input"
                      placeholder="Search Here..."
                      type="search"
                      id="search"
                    />
                    <button className="search-submit" value>
                      <span className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="user-dropdown-details d-flex">
                  <div className="profile_details_left">
                    <ul className="nofitications-dropdown">
                      <li className="dropdown">
                        <NavLink
                          to="/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-bell-o" />
                          <span className="badge blue">3</span>
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="notification_header">
                              <h3>You have 3 new notifications</h3>
                            </div>
                          </li>
                          <li>
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar1.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>Johnson purchased template</p>
                                <span>Just Now</span>
                              </div>
                            </NavLink>
                          </li>
                          <li className="odd">
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar2.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>New customer registered </p>
                                <span>1 hour ago</span>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar3.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>Lorem ipsum dolor sit amet </p>
                                <span>2 hours ago</span>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <div className="notification_bottom">
                              <NavLink to="/all" className="bg-primary">
                                See all notifications
                              </NavLink>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <NavLink
                          to="/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-comment-o" />
                          <span className="badge blue">4</span>
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="notification_header">
                              <h3>You have 4 new messages</h3>
                            </div>
                          </li>
                          <li>
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar1.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>Johnson purchased template</p>
                                <span>Just Now</span>
                              </div>
                            </NavLink>
                          </li>
                          <li className="odd">
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar2.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>New customer registered </p>
                                <span>1 hour ago</span>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar3.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>Lorem ipsum dolor sit amet </p>
                                <span>2 hours ago</span>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="grid">
                              <div className="user_img">
                                <img src="assets/images/avatar1.jpg" alt="" />
                              </div>
                              <div className="notification_desc">
                                <p>Johnson purchased template</p>
                                <span>Just Now</span>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <div className="notification_bottom">
                              <NavLink to="/all" className="bg-primary">
                                See all messages
                              </NavLink>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="profile_details">
                    <ul>
                      <li className="dropdown profile_details_drop">
                        <NavLink
                          to="/"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          id="dropdownMenu3"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="profile_img">
                            <img
                              src="assets/images/profileimg.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                            <div className="user-active">
                              <span />
                            </div>
                          </div>
                        </NavLink>
                        <ul
                          className="dropdown-menu drp-mnu"
                          aria-labelledby="dropdownMenu3"
                        >
                          <li className="user-info">
                            <h5 className="user-name">John Deo</h5>
                            <span className="status ml-2">Available</span>
                          </li>
                          <li>
                            <NavLink to="/">
                              <i className="lnr lnr-user" />
                              My Profile
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/">
                              <i className="lnr lnr-users" />
                              1k Followers
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/">
                              <i className="lnr lnr-cog" />
                              Setting
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/">
                              <i className="lnr lnr-heart" />
                              100 Likes
                            </NavLink>
                          </li>
                          <li className="logout">
                            <NavLink to="/sign-up">
                              <i className="fa fa-power-off" /> Logout
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*notification menu end */}
          </div>
          {/* //header-ends */}
        </div>
      </section>
    );
  }
}
