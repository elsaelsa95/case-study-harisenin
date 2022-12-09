import CardAsset from "./../components/CardAsset";
import Button from "react-bootstrap/Button";
import { readAsset } from "../store/action/actionCreator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Asset() {
  const { assets } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readAsset());
  }, []);

  const navigate = useNavigate();
  const handleGoToCreate = () => {
    navigate({
      pathname: "/createAsset",
    });
  };

  return (
    <>
      <section className="py-5">
        <div className="container">
          {assets.map((assets) => {
            return <CardAsset assets={assets} key={assets.id} />;
          })}
          <Button variant="dark" onClick={() => handleGoToCreate()}>
            New
          </Button>
        </div>
      </section>
    </>
  );
}
