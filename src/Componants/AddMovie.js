import { useState } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import ReactStars from "react-stars";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const ratingChanged = (newRating) => {
    setRating(newRating)
  }

  const toogleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterUrl] = useState("");
  const [rating, setRating] = useState(0);

  const toObject = () => {
    const newMovie = {
      title,
      description,
      posterURL,
      rating,
    };
    console.log(newMovie);
    addMovie(newMovie);
    toogleModal();
  };

  return (
    <div>
      <Button onClick={toogleModal}>Add movie</Button>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <h2>Add Movie</h2>
        <Button variant="danger" onClick={toogleModal}>
          Close
        </Button>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>PosterUrl</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="PosterUrl"
                  onChange={(e) => setPosterUrl(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
               <Form.Label>Rating</Form.Label>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </Form.Group>
          </Row>
          <Button type="submit" onClick={toObject}>
            Submit form
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddMovie;
