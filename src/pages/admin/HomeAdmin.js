import React, { Component } from "react";

export default class HomeAdmin extends Component {
  render() {
    return (
      <div style={{ height: "85vh" }}>
        {/* content */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        <div className="welcome-msg pt-3 pb-4">
          <h1>
            Hi <span className="text-primary">John</span>, Welcome back
          </h1>
          <p>Very detailed &amp; featured admin.</p>
        </div>
        {/* statistics data */}
        <div className="statistics">
          <div className="row">
            <div className="col-xl-6 pr-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-users"> </i>
                    <h3 className="text-primary number">29.75 M</h3>
                    <p className="stat-text">Total Users</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-eye"> </i>
                    <h3 className="text-secondary number">51.25 K</h3>
                    <p className="stat-text">Daily Visitors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pl-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cloud-download"> </i>
                    <h3 className="text-success number">166.89 M</h3>
                    <p className="stat-text">Downloads</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cart"> </i>
                    <h3 className="text-danger number">1,250k</h3>
                    <p className="stat-text">Purchased</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //statistics data */}
        {/* //content */}
      </div>
    );
  }
}
