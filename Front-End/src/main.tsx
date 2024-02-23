import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, GetCar, NotFound } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<GetCar />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
