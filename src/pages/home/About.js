import React from 'react';
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div>
  <section className="w3l-banner-slider-main w3l-inner-page-main">
    <div className="breadcrumb-infhny">
      <header className="top-headerhny">
        {/*/nav*/}
        <nav className="navbar navbar-expand-lg navbar-light fill" style={{ padding: "0" }}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="index.html">
              <label className="lohny"><span className="fa fa-graduation-cap" aria-hidden="true" />Edu</label>Line</NavLink>
            {/* if logo is image enable this   
						<NavLink class="navbar-brand" to="#index.html">
							<img src="image-path" alt=""="Your logo" title="Your logo" style="height:35px;" />
						</NavLink> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-lg-auto ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="index.html">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="about.html">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="services.html">Courses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact.html">Contact</NavLink>
                </li>
              </ul>
            </div>
            <form action="#" method="post" className="d-flex searchhny-form">
              <input type="search" placeholder="Search Here..." required="required" />
              <button type="submit"><span className="fa fa-search" aria-hidden="true" /></button>
            </form>
          </div>
        </nav>
        {/*//nav*/}
      </header>
      {/* /breadcrumbs*/}
      <div className="container">
        <nav aria-label="breadcrumb" className="breadcrumb-info">
          <h2 className="hny-title text-center">About Us</h2>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><NavLink to="index.html">Home</NavLink></li>
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>
      {/* //breadcrumbs*/}
    </div>
    {/*//banner-slider*/}
  </section>
  <section className="w3l-wecome-content-6">
    {/* /content-6-section */}
    <div className="ab-content-6-mian py-5">
      <div className="container py-lg-5">
        <div className="welcome-grids row">
          <div className="col-lg-6 mb-lg-0 mb-5">
            <h6>About Us</h6>
            <h3 className="hny-title">
              Improving Lives Through Learning
            </h3>
            <p className="my-4">Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla,
              gravida felis vitae. Phasellus lacinia id, sunt in culpa quis. Phasellus lacinia</p>
            <p className="mb-4">Excepteur sint occaecat non proident, sunt in culpa quis. Phasellus lacinia id erat eu ullamcorper. Nunc id ipsum fringilla.</p>
            <div className="button-4-pink">
              <div className="eff-4-pink" />
              <NavLink to="services.html"> Read More</NavLink>
            </div>
          </div>
          <div className="col-lg-6 welcome-image">
            <img src="../../images/ab.jpg" className="img-fluid" alt="" />
          </div>	
        </div>	
      </div>
    </div>
  </section>
  {/* //content-6-section */}
  <section className="w3l-specification-6">
    {/* /specification-6*/}
    <div className="specification-content py-5">
      <div className="container py-lg-5">
        <div className="mission-grids-info row">
          <div className="mission-gd-left col-lg-7">
            <div className="grids-inn-ab">
              <div className="sub-mission one-top">
                <div className="mission-sec-gd">
                  <img src="../../images/p1.jpg" alt="" className="img-fluid" />
                </div>
                <div className="mission-sec-gd">
                  <img src="../../images/p2.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="sub-mission">
                <div className="mission-sec-gd">
                  <img src="../../images/p6.jpg" alt="" className="img-fluid" />
                </div>
                <div className="mission-sec-gd">
                  <img src="../../images/p4.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="mission-gd-right col-lg-5 pl-lg-4">
            <h3 className="hny-title">Our Mission</h3>
            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur.Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit..</p>
          </div>
        </div>
      </div>
    </div></section>
  {/* //specification-6*/}
  <section className="w3l-content-5">
    {/* /content-6-section */}
    <div className="content-5-main">
      <div className="container">
        <div className="content-info-in row">
          <div className="content-gd col-lg-6">
            <h3 className="hny-title two">
              We work hard to prepare every student for their professional life</h3>
          </div>
          <div className="content-gd col-lg-6">
            <p>Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit. Fuga, suscipit totam animi consequatur saepe blanditiis.</p>
            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit. Fuga, suscipit totam animi consequatur saepe blanditiis.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //content-6-section */}
  {/*/team-sec*/}
  <section className="w3l-team-main">
    <div className="team py-5">
      <div className="container py-lg-5">
        <div className="row title-content">
          <div className="col-lg-4 title-left">
            <h3 className="hny-title">Expert Instructors</h3>
          </div>
          <div className="col-lg-8 title-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eligendi minima
              accusantium
              reiciendis, cupiditate optio corrupti quis quam at!.Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum.</p>
          </div>
        </div>
        <div className="row team-row">
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team1.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Mickel Zaman</NavLink></h3>
                <p>Law Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team2.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Paul Croves</NavLink></h3>
                <p>English Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team3.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Ricardo Spencer</NavLink></h3>
                <p>Gym Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team4.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Marko Dugonji</NavLink></h3>
                <p>Law Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team5.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Anthony</NavLink></h3>
                <p>Physics Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team6.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Emma Stone</NavLink></h3>
                <p>Maths Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team7.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Rhoda Byrd</NavLink></h3>
                <p>Finance Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
          {/* end team member */}
          <div className="col-lg-3 col-md-6 team-wrap">
            <div className="team-info text-center">
              <div className="column position-relative">
                <NavLink to="#url"><img src="../../images/team8.jpg" alt="" className="img-fluid team-image" /></NavLink>
              </div>
              <div className="column">
                <h3 className="name-pos"><NavLink to="#url">Max Stoiber</NavLink></h3>
                <p>History Instructor</p>
                <div className="social">
                  <NavLink to="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true" /></NavLink>
                  <NavLink to="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true" /></NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* end team member */}
        </div>
      </div>
    </div></section>
  {/*//team-sec*/}
</div>

    </div>
  )
}
