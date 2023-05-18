import { Link } from 'react-router-dom'

import { MDBFooter } from 'mdb-react-ui-kit'
export default function App() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted text-light"
      style={{
        backgroundColor: '#000',
      }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom text-light">
        <div className="me-5 d-none d-lg-block text-white">
          <span>Get connected with us on social networks :</span>
        </div>
        <div>
          <a href="craftsmangdsc@gmail.com" className="mr-4 text-light">
            <i className="fab fa-google"></i>
          </a>
          <a
            href="https://www.instagram.com/shopilive_/"
            className="mr-4 text-light"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/kanisht09/EShopilive"
            className="mr-4 text-light"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section style={{ padding: '2rem 0' }}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <div className="w-100 d-flex justify-content-center">
                <h2 className="text-light">SHOPILIVE</h2>
              </div>
              <p className="mt-4 text-center fs-6 text-white">
                Our vision is to provide the best electronic-goods at an
                affordable rate while preserving the quality.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p className="text-white">
                <Link to="/search/phone" className="text-reset">
                  Phones
                </Link>
              </p>
              <p className="text-white">
                <Link to="/" className="text-reset">
                  Watches
                </Link>
              </p>
              <p className="text-white">
                <Link to="/search/headphones" className="text-reset">
                  HeadPhones
                </Link>
              </p>
              <p className="text-white">
                <Link to="/search/laptop" className="text-reset">
                  Laptops
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p className="text-white">
                <Link to="/cart" className="text-reset">
                  Cart
                </Link>
              </p>
              <p className="text-white">
                <Link to="/profile" className="text-reset">
                  Orders
                </Link>
              </p>
              <p className="text-white">
                <a
                  href="mailto:shopilivebusiness2023@gmail.com"
                  className="text-reset"
                >
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 d-flex align-items-center justify-content-center text-white">
                Contact
              </h6>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <i className="fas fa-home mr-2"></i>
                <p className="d-flex justify-content-center align-items-center mb-0 text-white">
                  &nbsp;India, Kolkata
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <i className="fas fa-envelope mr-2"></i>
                <a
                  className="d-flex justify-content-center align-items-center mb-0 text-white"
                  href="mailto:shopilivebusiness2023@gmail.com"
                >
                  &nbsp;shopilivebusiness2023@gmail.com
                </a>
              </div>
              <div className="d-flex justify-content-center">
                <i className="fas fa-phone mr-3"></i>
                <a className="text-white" href="callto:9845123456">
                  +91 9845 123456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
          color: 'rgb(173, 186, 199)',
        }}
      >
        © 2022 Copyright : &nbsp;
        <Link className="text-reset fw-bold" to="/">
          SHOPILIVE
        </Link>
      </div>
    </MDBFooter>
  )
}
