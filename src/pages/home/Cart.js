import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";

export default function GioHang() {
  const [cartItem, setCartItem] = useState(
    !JSON.parse(localStorage.getItem(`cartItem`))
      ? []
      : JSON.parse(localStorage.getItem(`cartItem`))
  );
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    console.log(cartItem);
  }, [cartItem]);
  const removeItem = (item) => {
    setCartItem(cartItem.filter((i) => i.maKhoaHoc !== item.maKhoaHoc));
    localStorage.setItem(
      `cartItem`,
      JSON.stringify(cartItem.filter((i) => i.maKhoaHoc !== item.maKhoaHoc))
    );
  };
  if (cartItem.length === 0)
    return (
      <div>
        <Banner />
        <section className="features-6">
          <div className="features6-block">
            <div className="container">
              <div className="row title-content">
              </div>
            </div>
          </div>
        </section>

        <section className="w3l-services-2 my-5">
          {/* /content-6-section */}
          <div className="container">
            <div className="py-3">
              <div className="row">
                <div className="col-md-9">
                  <h5>{`${cartItem.length}`} Course in cart</h5>
                  {/* Cart item */}
                  <div>Nothing</div>
                  {/* End Cart item */}
                </div>
                <div className="col-md-3">
                  <h5>Total</h5>
                  <h1>$60.00</h1>
                  <span style={{ textDecoration: "line-through" }}>
                    $600.00
                  </span>
                  <br />
                  <span>Sale of 90%</span> <br />
                  <Button
                    to="/checkout"
                    variant="outlined"
                    color="secondary"
                    className="w-100"
                  >
                    Checkout
                  </Button>
                  <hr className="w-100" style={{ margin: "10px 0" }} />
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button
                        className="input-group-text"
                        id="basic-addon1"
                        style={{ background: "#dc3545", color: "#fff" }}
                      >
                        Apply
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Coupon"
                      aria-label="Enter Coupon"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  return (
    <div>
      <Banner />
      <section className="features-6">
        <div className="features6-block">
          <div className="container">
            <div className="row title-content">
              {/* <div className="col-lg-4 title-left">
                  <h3 className="hny-title">What We Provide</h3>
                </div>
                <div className="col-lg-8 title-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae eligendi minima accusantium reiciendis,
                    cupiditate optio corrupti quis quam at!.Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum.
                  </p>
                </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-services-2 my-5">
        {/* /content-6-section */}
        <div className="container">
          <div className="py-3">
            <div className="row">
              <div className="col-md-9">
                <h5>{`${cartItem.length}`} Course in cart</h5>
                {/* Cart item */}
                {cartItem.map((i) => (
                  <div
                    key={i.maKhoaHoc}
                    className="cart_item bg-light rounded-lg border my-2"
                  >
                    <div className="row p-1">
                      <div className="col-md-2 d-flex align-items-center">
                        <img
                          src={`${i.hinhAnh}`}
                          alt="..."
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <b>{i.tenKhoaHoc}</b>
                        <p>{i.mota}</p>
                      </div>
                      <div className="col-md-3 d-flex align-items-center">
                        <ul>
                          <li style={{ listStyle: "none" }}>
                            <Link href="#" onClick={() => removeItem(i)}>
                              Remove
                            </Link>
                          </li>
                          <li style={{ listStyle: "none" }}>
                            <a href="/">Save for Later</a>
                          </li>
                          <li style={{ listStyle: "none" }}>
                            <a href="/">Move to Wishlist</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-1 d-flex align-items-center p-0">
                        <ul>
                          <li style={{ listStyle: "none" }}>
                            <b style={{ color: "#ec5252" }}>$30.00</b>
                          </li>
                          <li style={{ listStyle: "none" }}>
                            <span style={{ textDecoration: "line-through" }}>
                              $300.00
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
                {/* End Cart item */}
              </div>
              <div className="col-md-3">
                <h5>Total</h5>
                <h1>$60.00</h1>
                <span style={{ textDecoration: "line-through" }}>$600.00</span>
                <br />
                <span>Sale of 90%</span> <br />
                <Button
                  href="/checkout"
                  variant="outlined"
                  color="secondary"
                  className="w-100"
                >
                  Checkout
                </Button>
                <hr className="w-100" style={{ margin: "10px 0" }} />
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button
                      className="input-group-text"
                      id="basic-addon1"
                      style={{ background: "#dc3545", color: "#fff" }}
                    >
                      Apply
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Coupon"
                    aria-label="Enter Coupon"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
