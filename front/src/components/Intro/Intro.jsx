import React from "react";

const Intro = () => {
  return (
    <>
      <div
        style={{
          padding: "7%",
          paddingBottom: 0,
          backgroundColor: "#f2f2f2",
          //   display: "flex",
          //   flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              textAlign: "center",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              width: "45%",
            }}
          >
            Why VivaVintage
          </h1>
          <div style={{ fontSize: "30px", width: "55%" }}>
            {/* <div style={{ fontSize: "30px", textAlign: "justify", width: "45%" }}> */}
            {/* <p style={{ fontSize: "30px", textAlign: "justify"}}>
            fewfewfewfwefewfwefewewfwStarted by fashion enthusiast Fernanda
            Suarez at 2023, our vintage clothing store transports you back in
            time with its stylishly curated collection. We prioritize quality
            and authenticity. Each item in our collection is carefully inspected
            to ensure that it meets our high standards. We believe that
            embracing classic styles is a way to express your unique taste.efew
          </p> */}
            <ul style={{ fontSize: "30px", listStyleType: "none" }}>
              <li style={{ borderBottom: "1px solid grey", width: "83%", marginBottom: "20px"}}>
                EXCLUSIVE STYLES<br/>timeless collection of vintage clothing
              </li>
              <li style={{ borderBottom: "1px solid grey", width: "83%", marginBottom: "20px" }}>ECO-FRIENDLY<br/>embrace sustainability</li>
              <li style={{ borderBottom: "1px solid grey", width: "83%", marginBottom: "20px" }}>PERSONALIZED<br/>we are didicated to provide the best service for you</li>
              <li style={{ borderBottom: "1px solid grey", width: "83%"}}>ALL SIZE<br/>we believe in the perfect fit for everyone</li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div
        style={{
          padding: "7%",
          backgroundColor: "#f2f2f2",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <h1
            style={{
              fontSize: "50px",
              textAlign: "center",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              width: "45%",
            }}
          >
            About us
          </h1>
          <p style={{ fontSize: "30px", textAlign: "justify", width: "45%" }}>
            Started by fashion enthusiasts at 2023, our vintage
            clothing store transports you back in time with its stylishly
            curated collection. We prioritize quality and authenticity. Each
            item in our collection is carefully inspected to ensure that it
            meets our high standards. We believe that embracing classic styles
            is a way to express your unique taste.
          </p>
        </div>
      </div>
    </>
  );
};

export default Intro;
