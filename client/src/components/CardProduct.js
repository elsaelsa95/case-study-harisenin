import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../store/action/actionCreator";

function CardProduct({ products }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleGoToDetail = (id) => {
    navigate({
      pathname: `/products/${id}`,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Card style={{ width: "18rem" }} className="mb-2">
      <Card.Body>
        <Card.Title>{products.Product.productName}</Card.Title>
        <Card.Img variant="top" src={products.Asset.path} />
      </Card.Body>
      <Card.Body>
        <Button
          variant="dark"
          onClick={() => handleGoToDetail(products.Product.id)}
        >
          Detail
        </Button>
        <Button variant="dark" onClick={() => handleDelete(products.id)}>
          <FaTrash />
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
