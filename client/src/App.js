import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;