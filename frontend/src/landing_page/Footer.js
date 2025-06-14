import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb" }} className="border-top">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.png" style={{ width: "50%" }} className="mb-3" />
            <p className="mb-4">&copy; MERN Broking Ltd. All rights reserved.</p>
            <div className="fs-4 d-flex gap-3 text-muted">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <hr />
            <div className="fs-4 d-flex gap-3 text-muted">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-solid fa-comment"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col footer-nav">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">MERN.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">MERN Cares (CSR)</a>
            <br />
          </div>
          <div className="col footer-nav">
            <p>Support</p>
            <a href="">Contact us</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col footer-nav">
            <p>Account</p>
            <a href="">Open an account</a>
            <a href="">Fund transfer</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing. Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need
            not
          </p>
          <br />
          <p>undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
          <br />
        </div>
        <div className="mt-2 text-muted d-flex gap-3 justify-content-center footer-links" style={{ fontSize: "15px" }}>
          <p>NSE</p>
          <p>BSE</p>
          <p>MCX</p>
          <p>Terms & Conditions</p>
          <p>Policies and procedures</p>
          <p>Privacy Policy </p>
          <p>Disclosure</p>
          <p>For investors Attention</p>
          <p>Investors charter</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;