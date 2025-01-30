import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Solutions</h2>
          <h3>Our solutions
Create your account quickly with just your email or social media login, then explore a wide range</h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <p>{d.price}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div> 
  );
};

