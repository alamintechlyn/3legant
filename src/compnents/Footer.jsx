import React from "react";
import logo from "../assets/images/fotter_logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="brand">
            <Link to="#">
              <img src={logo} alt="" />
            </Link>
            <p className="categroy-text">
              More than just a game It's a lifestyle.
            </p>
            <div className="social-icons">
              <Link to="#" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                  />
                  <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                  />
                </svg>
              </Link>
              <Link to="#" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
              <Link to="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2"
                    y="3"
                    width="20"
                    height="18"
                    rx="4"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="common-shop-now-btn">Page</h3>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Shop</Link>
              </li>
              <li>
                <Link to="#">Product</Link>
              </li>
              <li>
                <Link to="#">Articles</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="common-shop-now-btn">Info</h3>
            <ul>
              <li>
                <Link to="#">Shipping Policy</Link>
              </li>
              <li>
                <Link to="#">Return & Refund</Link>
              </li>
              <li>
                <Link to="#">Support</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="common-shop-now-btn">Office</h3>
            <ul className="address">
              <li>43111 Hai Trieu street,</li>
              <li>District 1, HCMC</li>
              <li>Vietnam</li>
              <li><Link to="tel:84-756-3237" class="phone-link">84-756-3237</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="coppy_text">Copyright © 2023 3legant. All rights reserved</span>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Conditions</Link>
          </div>
          <div className="payment-methods">
              <img src="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/payment-02.png?v=1746113973" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/payment-03.png?v=1746113972" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/payment-05.png?v=1746113973" alt="" />
              <img src="https://cdn.shopify.com/s/files/1/0639/7352/3521/files/pyment-01.png?v=1746113973" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
