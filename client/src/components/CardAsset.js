import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteAsset } from "../store/action/actionCreator";

function CardAsset({ assets }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleGoToEdit = (id) => {
    navigate({
      pathname: `/assets/${id}`,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteAsset(id));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{assets.name}</Card.Title>
        <Card.Img variant="top" src={assets.path} />
      </Card.Body>
      <Card.Body>
        <Button variant="dark" onClick={() => handleGoToEdit(assets.id)}>
          <FaEdit />
        </Button>
        <Button variant="dark" onClick={() => handleDelete(assets.id)}>
          <FaTrash />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardAsset;
