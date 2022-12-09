import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../store/action/actionCreator";

export default function TableProduct({ products }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleGoToDetail = (id) => {
    navigate({
      pathname: `/products/${id}`,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  };

  return (
    <tr>
      <td>{products.id}</td>
      <td>{products.productName}</td>
      <td>{products.productSlug}</td>
      <td>{products.price}</td>
      <td>{products.description}</td>
      <td>
        <Button variant="dark" onClick={() => handleGoToDetail(products.id)}>
          <FaEdit />
        </Button>
      </td>
      <td>
        <Button variant="dark" onClick={() => handleDelete(products.id)}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
}