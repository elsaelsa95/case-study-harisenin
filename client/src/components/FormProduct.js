import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  readDetailProduct,
  updateProduct,
} from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { productById } = useSelector((state) => state);

  const handleGoTo = () => {
    navigate({
      pathname: "/products",
    });
  };

  let [input, setInput] = useState({
    productName: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (productById) {
      setInput({
        productName: productById.findProduct.productName,
        price: productById.findProduct.price,
        description: productById.findProduct.description,
      });
    }
  }, [productById]);

  useEffect(() => {
    if (id) {
      dispatch(readDetailProduct(id));
    }
    if (!id) {
      setInput({
        productName: "",
        price: "",
        description: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(createProduct(input));
      handleGoTo();
    }
    if (id) {
      dispatch(updateProduct(id, input));
      handleGoTo();
    }
  };
  return (
    <section className="py-5">
      <div className="container">
        <h1> Form Product </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              value={input.productName}
              onChange={handleChange}
              name="productName"
              type="text"
              placeholder="Enter Product Name"
            />
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={input.price}
              onChange={handleChange}
              name="price"
              type="number"
              placeholder="Enter Price"
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={input.description}
              onChange={handleChange}
              name="description"
              type="text"
              placeholder="Enter Description"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
          <Button variant="danger" type="submit" onClick={() => handleGoTo()}>
            Cancel
          </Button>
        </Form>
      </div>
    </section>
  );
}
