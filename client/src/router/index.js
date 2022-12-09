import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Asset from "./../pages/Asset";
import Category from "./../pages/Category";
import Product from "./../pages/Product";
import FormAsset from "./../components/FormAsset"
import FormCategory from "./../components/FormCategory"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/assets",
    element: <Asset />,
  },
  {
    path: "/createAsset",
    element: <FormAsset />,
  },
  {
    path: "/assets/:id",
    element: <FormAsset />,
  },
  {
    path: "/categories",
    element: <Category />,
  },
  {
    path: "/createCategory",
    element: <FormCategory />,
  },
  {
    path: "/categories/:id",
    element: <FormCategory />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "*",
    element: (
      <div>
        <h1>
          {" "}
          <p class="text-center">Oopss... 404 Not Found</p>
        </h1>
      </div>
    ),
  },
]);
export default router;
