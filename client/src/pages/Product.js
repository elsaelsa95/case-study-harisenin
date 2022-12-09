import CardProduct from "./../components/CardProduct";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { readProduct } from "../store/action/actionCreator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readProduct());
  }, []);

  const navigate = useNavigate();
  const handleGoToCreate = () => {
    navigate({
      pathname: "/createProduct",
    });
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          {products.map((products) => {
            return <CardProduct products={products} key={products.id} />;
          })}
          <Card style={{ width: "18rem" }} className="mb-2">
            <Card.Body>
              <Button variant="white" onClick={() => handleGoToCreate()}>
                +
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
