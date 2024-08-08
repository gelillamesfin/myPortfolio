import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Js/Ts Developer", "React Developer"];
  const period = 2000;


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      console.log(index);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Gelilla`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="1000"
                      data-rotate='[ "Web Developer", "Js/Ts Developer", "React Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Motivated and enthusiastic software developer specializing
                    in JavaScript (ES5, ES6+), TypeScript, Express, Node.js,
                    React.js, React Native, Bootstrap, Ant Design, Material UI,
                    and MongoDB. With a proven track record of delivering
                    technically proficient solutions, I bring a deep
                    understanding of healthcare workflows, regulations, and
                    patient needs, enabling me to develop software that not only
                    meets industry standards but also enhances operational
                    efficiencies. My experience in the financial industry
                    demonstrates my adaptability and strong problem-solving
                    abilities in diverse environments. Guided by my Christian
                    faith, I approach my work with integrity, compassion, and a
                    commitment to excellence, believing that my skills and
                    values can contribute positively to both my profession and
                    the community.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
     
        </Row>
      </Container>
    </section>
  );
};
