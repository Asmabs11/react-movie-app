import ReactStars from "react-stars";
import Form from "react-bootstrap/Form";

const Filter = ({setSearchTitle, setSearchRating}) => {

  const ratingChanged = (newRating) => {
    setSearchRating(newRating)
  };
  return (
    <>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
      <Form.Control
      width='25%'
        type="text"
        placeholder="Search by title"
        onChange={(e)=>setSearchTitle(e.target.value)}
      />
    </>
  );
};

export default Filter;