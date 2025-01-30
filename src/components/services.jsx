import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>What will be the next step</h2>
          <p>Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-2">
                  {" "}
                 
                  <div className="service-desc servicebtn">
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
