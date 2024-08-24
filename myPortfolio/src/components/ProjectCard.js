import { Col } from "react-bootstrap";
 
  const videoStyle = {
    width: "100%",  
    height: "200px",  
    objectFit: "cover",  
    cursor:'pointer',
  };
export const ProjectCard = ({ title, description, videoURL,imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
       {videoURL? <video  src={videoURL} controls style={videoStyle} id='video'/>:
        <img src={imgUrl} alt="" />}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
