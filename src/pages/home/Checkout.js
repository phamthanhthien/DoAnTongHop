import React from "react";
import Banner from "../../components/Banner";
import Button from "@material-ui/core/Button";

export default function Checkout() {
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
        <section className="py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="card card-default">
                  <h6 className="card-header">
                    <i className="ya ya-pin mr-1" /> Billing Address
                  </h6>
                  <div className="card-body">
                    <form>
                      <div className="form-group row">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <label htmlFor="first-name">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="first-name"
                            placeholder="Enter First Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="last-name">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="last-name"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                          className="selectpicker w-100 custom-select"
                          id="country"
                          data-live-search="true"
                          title="Nothing selected"
                        >
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>Spain</option>
                          <option>Italy</option>
                        </select>
                        <small
                          id="countryHelp"
                          className="form-text text-muted"
                        >
                          Saw yet kindness too replying whatever marianne.
                        </small>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-4 mb-3 mb-md-0">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                          />
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <label htmlFor="zip">Zip</label>
                          <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder="Postal Code"
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="city">City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email"
                          />
                          <small className="form-text text-muted">
                            We’ll never share your email with anyone else.
                          </small>
                        </div>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="shipping"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="shipping"
                        >
                          Use as shipping address.
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
                {/* end .card */}
                <div className="card card-default">
                  <h6 className="card-header">
                    <i className="ya ya-credit-card mr-1" /> Credit Card
                  </h6>
                  <div className="card-body">
                    <div className="form-group row">
                      <div className="col-6">
                        <label htmlFor="card-name">Name on card</label>
                        <input
                          type="text"
                          className="form-control"
                          id="card-name"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="col-6">
                        <label htmlFor="card-number">Card Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="card-number"
                          placeholder="Enter Card Number"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-4">
                        <label htmlFor="expiry-date">Bank Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="bank-name"
                          placeholder="Enter Bank Name"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="expiry-date">Expiry Date</label>
                        <input
                          type="text"
                          className="form-control"
                          id="expiry-date"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="col-4">
                        <label htmlFor="cvv">CVC/CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cvv"
                          placeholder={123}
                        />
                      </div>
                    </div>
                    <small className="form-text text-muted">
                      Saw yet kindness too replying whatever marianne.
                    </small>
                  </div>
                </div>
                {/* end .card */}
                <div className="card card-default mb-lg-0">
                  <h6 className="card-header">
                    <i className="ya ya-paypal mr-1" /> Paypal
                  </h6>
                  <div className="card-body">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="paypal"
                        defaultChecked
                      />
                      <label className="custom-control-label" htmlFor="paypal">
                        Pay with paypal
                      </label>
                    </div>
                    <small className="form-text text-muted mt-3">
                      Saw yet kindness too replying whatever marianne.
                    </small>
                  </div>
                </div>
                {/* end .card */}
              </div>
              <div className="col-lg-3">
                <div className="card card-default mb-3">
                  <h6 className="card-header">Order Summary</h6>
                  <div className="card-body px-2">
                    <p className="font-size-md">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <table className="table table-striped mt-4 mb-0">
                      <tbody>
                        <tr>
                          <th scope="row">Cart Subtotal</th>
                          <td className="text-right">$60.00</td>
                        </tr>
                        <tr>
                          <th scope="row">Shipping</th>
                          <td className="text-right">$2.45</td>
                        </tr>
                        <tr>
                          <th scope="row">Tax</th>
                          <td className="text-right">$0.00</td>
                        </tr>
                        <tr>
                          <th scope="row">Order Total</th>
                          <td className="text-right">
                            <strong className="text-danger">$62.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end .card */}
                <div className="text-right">
                  <Button variant="contained" color="primary">
                    Submit Order
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
