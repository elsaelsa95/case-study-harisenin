import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createCategory,
  readDetailCategory,
  updateCategory,
} from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { categoryById } = useSelector((state) => state);

  const handleGoTo = () => {
    navigate({
      pathname: "/categories",
    });
  };

  let [input, setInput] = useState({
    categoryName: "",
    AssetId: "",
  });

  useEffect(() => {
    if (categoryById) {
      setInput({
        categoryName: categoryById.findCategory.categoryName,
        AssetId: categoryById.findCategory.AssetId,
      });
    }
  }, [categoryById]);

  useEffect(() => {
    if (id) {
      dispatch(readDetailCategory(id));
    }
    if (!id) {
      setInput({
        categoryName: "",
        AssetId: "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      dispatch(createCategory(input));
      handleGoTo();
    }
    if (id) {
      dispatch(updateCategory(id, input));
      handleGoTo();
    }
  };
  return (
    <section className="py-5">
      <div className="container">
        <h1> Form Category </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              value={input.categoryName}
              onChange={handleChange}
              name="categoryName"
              type="text"
              placeholder="Enter Category Name"
            />
            <Form.Label>AssetId</Form.Label>
            <Form.Control
              value={input.AssetId}
              onChange={handleChange}
              name="AssetId"
              type="text"
              placeholder="Enter AssetId"
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
