import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createAsset,
  readDetailAsset,
  updateAsset,
} from "../store/action/actionCreator";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { assetById } = useSelector((state) => state);

  const handleGoTo = () => {
    navigate({
      pathname: "/assets",
    });
  };

  let [input, setInput] = useState({
    name: "",
    path: "",
    size: "",
  });

  useEffect(() => {
    if (assetById) {
      setInput({
        name: assetById.findAsset.name,
        path: assetById.findAsset.path,
        size: assetById.findAsset.size,
      });
    }
  }, [assetById]);

  useEffect(() => {
    if (id) {
      dispatch(readDetailAsset(id));
    }
    if (!id) {
      setInput({
        name: "",
        path: "",
        size: "",
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
      dispatch(createAsset(input));
      handleGoTo();
    }
    if (id) {
      dispatch(updateAsset(id, input));
      handleGoTo();
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1> Form Asset </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={input.name}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter name"
            />
            <Form.Label>Path</Form.Label>
            <Form.Control
              value={input.path}
              onChange={handleChange}
              name="path"
              type="text"
              placeholder="Enter Path"
            />
            <Form.Label>Size</Form.Label>
            <Form.Control
              value={input.size}
              onChange={handleChange}
              name="size"
              type="text"
              placeholder="Enter Size"
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
