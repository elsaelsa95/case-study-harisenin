import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteCategory } from "../store/action/actionCreator";

function CardCategory({ categories }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleGoToEdit = (id) => {
    navigate({
      pathname: `/categories/${id}`,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{categories.categoryName}</Card.Title>
        <Card.Img variant="top" src={categories.Asset.path} />
      </Card.Body>
      <Card.Body>
        <Button variant="dark" onClick={() => handleGoToEdit(categories.id)}>
          <FaEdit />
        </Button>
        <Button variant="dark" onClick={() => handleDelete(categories.id)}>
          <FaTrash />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardCategory;
