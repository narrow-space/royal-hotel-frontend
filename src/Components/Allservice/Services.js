import React, { useEffect, useState } from "react";
import Details from "./Details";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./Services.css";
import Typical from "react-typical";
import Plane from "react-loader-spinner";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://warm-reaches-84753.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [services]);

  return (
    <div className="container">
      <div className="mt-3 text-center">
        <span
          style={{ fontSize: "150px", color: "#E31C25", fontFamily: "cursive" }}
        >
          <Typical className='fs-1'
            steps={["VIEW OUR ", 2000, "SERVICES", 2000]}
            loop={Infinity}
            wrapper="h5"
          />
        </span>
      </div>

      <div className="row">
        {loading ? (
          <div className="loader">
            <Loader
              type="Plane"
              color="crimson"
              height={80}
              width={80}
              arialLabel="loading-indicator"
            />
          </div>
        ) : (
          <>
            {services.map((service, index) => (
              <Details key={service._id} service={service}></Details>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
