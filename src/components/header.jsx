import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get started
                </a>{" "}
              </div>
              <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/Frame 64.png" className="img-responsive" alt="" />{" "}
          </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
