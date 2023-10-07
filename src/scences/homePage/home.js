import React from "react";
import intro from "../../images/intro.png";
import arrow from "../../images/Arrow.png";
import map from "../../images/Group-6924-1.png";
// import img_1 from "../../images/1.png";
// import img_2 from "../../images/2.png";
// import img_3 from "../../images/3.png";
// import img_4 from "../../images/4.png";
import pic from "../../images/learn-1.png";
import capture from "../../images/Capture.png";
import { Button } from "@mui/material";

const home = () => {
  return (
    <>
      {/* BLOCK_1 */}
      <div
        style={{
          color: "#0F0F0F",
          fontSize: "18px",
          padding: "100px 30px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            background: "#dedede",
            color: "#69696969",
            fontSize: "14px",
            padding: "50px 50px 30px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              color: "#0F0F0F",
            }}
          >
            <div>
              <h1 style={{ fontSize: "65px" }}>
                Building the leading Tech learning company in Africa & The
                Middle East
              </h1>
            </div>
            <div>
              <a href="https://gomycode.com/tn/hackerspaces/" target="blank">
                <Button variant="contained" color="error">
                  Sign Up
                </Button>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img style={{ maxWidth: "100%" }} src={intro} alt="img_1"></img>
          </div>
        </div>
      </div>

      {/* BLOCK_2 */}
      <div
        style={{
          padding: "20px 30px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
        }}
      >
        <div style={{ gridColumn: "1 / 3", gridRow: "1" }}>
          <h2 style={{ fontSize: "42px" }}>It all starts with learning!</h2>
        </div>
        <div className="two">
          <img
            style={{ display: "block", margin: "0 auto" }}
            src={arrow}
            alt="img"
          />
        </div>
        <div
          style={{
            gridColumn: "4 / 7",
            gridRow: "1",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p>
              Our goal is to create an environment that nurtures learning,
              provides opportunities for practice, and enables you to turn your
              dreams into reality.
            </p>
          </div>
          <div>
            <p>
              Since starting out in a coworking space, we have come a long way.
              We were honored to win the BlooMMasters program at MIT in 2017.
              And over the past six years, we have successfully trained over
              30,000 students and established partnerships with more than 100
              organizations across eight countries.
            </p>
          </div>
          <div>
            <a href="https://gomycode.com/tn/hackerspaces/" target="blank">
              <Button variant="contained" color="error">
                Sign Up
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* BLOCK_3 */}
      <div style={{ padding: "20px 30px" }}>
        <div
          style={{
            backgroundColor: "#1a0ab3",
            borderRadius: "10px",
            padding: "50px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={map} alt="img"></img>
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div style={{ fontSize: "42px", color: "#fffaf3" }}>
              <h2 style={{ fontSize: "42px" }}>
                Developing Tech talent in Africa and the Middle East
              </h2>
            </div>
            <div style={{ fontSize: "18px", color: "#fffaf3" }}>
              <p>
                At Gomycode, our mission is to democratize education by
                empowering technology enthusiasts to learn tech skills. We have
                created a safe learning environment that enables you to
                challenge yourself with new skills. It's a great place to
                connect with like-minded people, even outside of your industry.
                Join us to learn, grow, and succeed in the world of technology.
              </p>
            </div>
            <div>
              <a href="https://gomycode.com/tn/hackerspaces/" target="blank">
                <Button variant="outlined" style={{ color: "#ffffff" }}>
                  Discover our Hackerspaces
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK_4 */}
      {/* <div style={{ padding: "20px 30px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(2, auto)",
            gap: "20px",
            background: "#0f0f0f",
            fontSize: "14px",
            padding: "50px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              padding: "0px 10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(2, auto)",
                gap: "20px",
                padding: "10px 0",
                margin: "0px auto",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#fffaf3",
                    fontSize: "42px",
                    fontWeight: "600px",
                    lineHeight: "50px",
                    margin: "0px",
                  }}
                >
                  By changing the way of learning We change the world!
                </h2>
              </div>
              <div>
                <iframe
                  width="1000"
                  height="500"
                  src="https://www.youtube.com/embed/isa3fk_oSUQ"
                  title="The future is here!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div style={{ padding: "0 10px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(3, auto)",
                gap: "20px",
                padding: "10px 0px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#fffaf3",
                    fontSize: "42px",
                    fontWeight: "600px",
                    lineHeight: "50px",
                    margin: "0px",
                    textAlign: "center"
                  }}
                >
                  Unlock the benefits of the experience
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 250px)",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                  margin: "0 auto"
                }}
              >
                <div
                  style={{
                    border: "1px #fffaf3 solid",
                    borderRadius: "10px",
                    padding: "0px 10px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px 0px",
                      display: "grid",
                      gridTemplateRows: "repeat(2, auto)",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ padding: "10px" }}>
                      <img
                        style={{ height: "auto", maxWidth: "100%" }}
                        src={img_1}
                        alt="img"
                      ></img>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: "repeat(2, auto)",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            color: "#fffaf3",
                            fontSize: "24px",
                            fontWeight: "700px",
                            lineHeight: "31px",
                            margin: "0px",
                          }}
                        >
                          Career training
                        </h2>
                      </div>
                      <div>
                        <p
                          style={{
                            color: "#fffaf3",
                            fontSize: "16px",
                            fontWeight: "400px",
                            lineHeight: "21px",
                            margin: "0px",
                          }}
                        >
                          Advance your career with immersive, full-time programs
                          and specific coaching.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px #fffaf3 solid",
                    borderRadius: "10px",
                    padding: "0px 10px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px 0px",
                      display: "grid",
                      gridTemplateRows: "repeat(2, auto)",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ padding: "10px" }}>
                      <img
                        style={{ height: "auto", maxWidth: "100%" }}
                        src={img_2}
                        alt="img"
                      ></img>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: "repeat(2, auto)",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            color: "#fffaf3",
                            fontSize: "24px",
                            fontWeight: "700px",
                            lineHeight: "31px",
                            margin: "0px",
                          }}
                        >
                          Skill training
                        </h2>
                      </div>
                      <div>
                        <p
                          style={{
                            color: "#fffaf3",
                            fontSize: "16px",
                            fontWeight: "400px",
                            lineHeight: "21px",
                            margin: "0px",
                          }}
                        >
                          Stay competitive and relevant with focused, flexible
                          learning, and dedicated mentors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px #fffaf3 solid",
                    borderRadius: "10px",
                    padding: "0px 10px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px 0px",
                      display: "grid",
                      gridTemplateRows: "repeat(2, auto)",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ padding: "10px" }}>
                      <img
                        style={{ height: "auto", maxWidth: "100%" }}
                        src={img_3}
                        alt="img"
                      ></img>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: "repeat(2, auto)",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            color: "#fffaf3",
                            fontSize: "24px",
                            fontWeight: "700px",
                            lineHeight: "31px",
                            margin: "0px",
                          }}
                        >
                          Talks, Workshops, Gatherings
                        </h2>
                      </div>
                      <div>
                        <p
                          style={{
                            color: "#fffaf3",
                            fontSize: "16px",
                            fontWeight: "400px",
                            lineHeight: "21px",
                            margin: "0px",
                          }}
                        >
                          Engage with our vibrant community through frequent
                          events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: "1px #fffaf3 solid",
                    borderRadius: "10px",
                    padding: "0px 10px",
                  }}
                >
                  <div
                    style={{
                      padding: "10px 0px",
                      display: "grid",
                      gridTemplateRows: "repeat(2, auto)",
                      justifyContent: "space-around",
                    }}
                  >
                    <div style={{ padding: "10px" }}>
                      <img
                        style={{ height: "auto", maxWidth: "100%" }}
                        src={img_4}
                        alt="img"
                      ></img>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: "repeat(2, auto)",
                        justifyContent: "space-between",
                        padding: "10px",
                      }}
                    >
                      <div>
                        <h2
                          style={{
                            color: "#fffaf3",
                            fontSize: "24px",
                            fontWeight: "700px",
                            lineHeight: "31px",
                            margin: "0px",
                          }}
                        >
                          Learn in our hackerspaces or online
                        </h2>
                      </div>
                      <div>
                        <p
                          style={{
                            color: "#fffaf3",
                            fontSize: "16px",
                            fontWeight: "400px",
                            lineHeight: "21px",
                            margin: "0px",
                          }}
                        >
                          Our students can learn both in our physical or online
                          hackerspaces.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "inline-block", margin: "0 auto" }}>
                <a href="https://gomycode.com/tn/hackerspaces/" target="blank">
                  <Button variant="contained" color="error">
                    Sign Up
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* BLOCK_5 */}
      <div style={{ padding: "20px 30px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            padding: "20px 50px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffb900",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <img src={pic} alt="img"></img>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateRows: "repeat(2, auto)",
              gap: "20px",
              padding: "30px 35px",
              backgroundColor: "#eee8df",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                display: "inline-block",
                width: "auto",
                height: "auto",
                fontSize: "42px",
                color: "#0f0f0f",
                margin: "0",
              }}
            >
              Learn from Anywhere!
            </h2>
            <p style={{ fontSize: "16px", color: "#0f0f0f", margin: "0" }}>
              Follow your courses through our online platform! Track your
              progress and performance, schedule meetings with your instructors,
              and take the various tests and checkpoints wherever you are.
            </p>
          </div>
        </div>
      </div>

      {/* BLOCK_6 */}
      <div style={{ padding: "20px 30px" }}>
        <div>
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            src={capture}
            alt="img"
          ></img>
        </div>
      </div>
    </>
  );
};

export default home;
