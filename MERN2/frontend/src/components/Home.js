import React from "react";
import Card from "./service/Card";
const Home = () => {
  return (
    <>
      {/* Image */}

      <div className="homemain">
        <div className="image">
          <div className="textmain">
            <h1 className="text">
              Solutions for a healthier, <br />
              <span style={{ marginLeft: "70px" }}>sustainable future</span>
            </h1>
            <br />
            <p className="para">
              '' Agriculture is the greatest and fundamentally the most
              important of our industries. The cities are but the branches of
              the tree of national life, the roots of which go deeply into the
              land. We all flourish or decline with the farmer. '' - bernard
              baruch
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="image2">
          <div className="textmain2">
            <h1 className="text2" style={{ color: "aliceblue" }}>
              <span style={{ marginLeft: "23%" }}>Helping</span> <br />
              farmers Fighting climate <br />
              <span style={{ marginLeft: "23%" }}>Change</span>.
            </h1>
            <br />
            <p className="para" style={{ color: "InfoBackground" }}>
              {" "}
              '' I know of no pursuit in which more real and important services
              can be rendered to any country than by improving its agriculture,
              its breed of useful animals, and other branches of a husbandman's
              cares. '' - george washington
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        
        

              {/* Service Cards */}

        <div className="service">
          <h1
            style={{
              fontWeight: "600",
              lineHeight: "4",
              color: "#5a5a5a",
              fontFamily: "sans-serif",
            }}
          >
            Comprehensive Service We Provide
          </h1>
          <div class="container">
            <div class="row">
              <div class="col" style={{ width: "25%" }}>
                <h3
                  style={{
                    fontFamily: "",
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    lineHeight: "2",
                    color: "#888",
                  }}
                >
                  PRICE
                </h3>
                <div
                  class="card"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <div class="card-body">
                    <p
                      style={{
                        fontFamily: "",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        color: "#888",
                      }}
                      class="card-text"
                    >
                      Check price of every agriculture product. Get minimum
                      price of it and use it
                    </p>
                  </div>
                </div>
              </div>
              <div class="col" style={{ width: "25%" }}>
                <h3
                  style={{
                    fontFamily: "",
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    lineHeight: "2",
                    color: "#888",
                  }}
                >
                  WEATHER
                </h3>
                <div
                  class="card"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1630260667842-830a17d12ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                  <div class="card-body">
                    <p
                      style={{
                        fontFamily: "",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        color: "#888",
                      }}
                      class="card-text"
                    >
                      Accurate Weather Information of 15 days to know when to
                      know Cultivate
                    </p>
                  </div>
                </div>
              </div>

              <div class="col" style={{ width: "25%" }}>
                <h3
                  style={{
                    fontFamily: "",
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    lineHeight: "2",
                    color: "#888",
                  }}
                >
                  WEATHER
                </h3>
                <div
                  class="card"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                  <div class="card-body">
                    <p
                      style={{
                        fontFamily: "",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        color: "#888",
                      }}
                      class="card-text"
                    >
                      Accurate Weather Information of 15 days to know when to
                      know Cultivate
                    </p>
                  </div>
                </div>
              </div>

              <div class="col" style={{ width: "25%" }}>
                <h3
                  style={{
                    fontFamily: "",
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    lineHeight: "2",
                    color: "#888",
                  }}
                >
                  WEATHER
                </h3>
                <div
                  class="card"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1630260667842-830a17d12ec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                  />
                  <div class="card-body">
                    <p
                      style={{
                        fontFamily: "",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        color: "#888",
                      }}
                      class="card-text"
                    >
                      Accurate Weather Information of 15 days to know when to
                      know Cultivate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
