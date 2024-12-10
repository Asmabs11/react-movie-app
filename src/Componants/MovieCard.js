import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterURL}  style={{ width: "100%", objectFit: "cover" , height:"70%" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            edit={false}
            value={rating}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
