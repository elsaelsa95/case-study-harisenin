import TableProduct from "../components/TableProduct";
import Table from "react-bootstrap/Table";
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
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Slug</th>
                <th>Price</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((products) => {
                return <TableProduct products={products} key={products.id} />;
              })}
            </tbody>
          </Table>
            <Button variant="dark" onClick={() => handleGoToCreate()}>
              New
            </Button>
        </div>
      </section>
    </>
  );
}
