import PropTypes from "prop-types";
// import React, { Component } from "react";

function App() {
  const cardData = [
    {
      Pack: "FREE",
      Amount: 0,
      Users: "Single User",
      Data: "5GB Storage",
      PublicProjects: "Unlimited Public Projects",
      Access: "Community Access",
      PrivateProjects: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports",
      Button: "BUTTON",
    },
    {
      Pack: "PLUS",
      Amount: 9,
      Users: "5 Users",
      Data: "50GB Storege",
      PublicProjects: "Unlimited Public Projects",
      Access: "Community Access",
      PrivateProjects: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports",
      Button: "BUTTON",
    },
    {
      Pack: "PRO",
      Amount: 49,
      Users: "Unlimited Users",
      Data: "150GB Storage",
      PublicProjects: "Unlimited Public Projects",
      Access: "Community Access",
      PrivateProjects: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports",
      Button: "BUTTON",
    },
  ];

  return (
    <>
      <section className="pricing py-5 container">
        <div className="container">
          <div className="row" id="cont">
            {cardData.map((e, i) => {
              return <AllData cardData={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

function AllData(Props) {
  if (Props.cardData.Amount === 0) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {Props.cardData.Pack}
            </h5>
            <h6 className="card-price text-center">
              <span className="period">${Props.cardData.Amount}</span>/month
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Users}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Data}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                  {Props.cardData.PublicProjects}
                </span>
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Access}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times text-muted">✖️</i>
                </span>
                {Props.cardData.PrivateProjects}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times text-muted">✖️</i>
                </span>
                {Props.cardData.Support}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times text-muted">✖️</i>
                </span>
                {Props.cardData.Domain}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times text-muted">✖️</i>
                </span>
                {Props.cardData.Report}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                {Props.cardData.Button}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (Props.cardData.Amount <= 9 && Props.cardData.Amount > 0) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {Props.cardData.Pack}
            </h5>
            <h6 className="card-price text-center">
              <span className="period">${Props.cardData.Amount}</span>/month
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Users}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Data}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.PublicProjects}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Access}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.PrivateProjects}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.Support}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.Domain}
              </li>
              <li className="text-muted">
                <span className="fa-li">
                  <i className="fas fa-times text-muted">✖️</i>
                </span>
                {Props.cardData.Report}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                {Props.cardData.Button}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (Props.cardData.Amount > 9) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {Props.cardData.Pack}
            </h5>
            <h6 className="card-price text-center">
              <span className="period">${Props.cardData.Amount}</span>/month
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Users}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Data}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.PublicProjects}
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check">✔️</i>
                </span>
                {Props.cardData.Access}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.PrivateProjects}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.Support}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.Domain}
              </li>
              <li className="text">
                <span className="fa-li">
                  <i className="fas fa-times">✔️</i>
                </span>
                {Props.cardData.Report}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                {Props.cardData.Button}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return alert("Please Choose Any Botton to Subcription");
  }
}



