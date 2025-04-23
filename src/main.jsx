import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
