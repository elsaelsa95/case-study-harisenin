import CardCategory from './../components/CardCategory'

import Button from "react-bootstrap/Button";
import { readCategory } from "../store/action/actionCreator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const { category } = useSelector((state) => state);
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
          {category.map((category) => {
            return <CardCategory category={category} key={category.id} />;
          })}
          <Button variant="dark" onClick={() => handleGoToCreate()}>
            New
          </Button>
        </div>
      </section>
    </>
  );
}
