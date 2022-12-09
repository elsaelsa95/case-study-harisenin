import CardCategory from "./../components/CardCategory";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { readCategory } from "../store/action/actionCreator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readCategory());
  }, []);

  const navigate = useNavigate();
  const handleGoToCreate = () => {
    navigate({
      pathname: "/createCategory",
    });
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          {categories.map((categories) => {
            return <CardCategory categories={categories} key={categories.id} />;
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
