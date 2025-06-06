import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./app/store";
import { Provider } from "react-redux";
import store from "./app/store";

// npm i react-redux @types/react-redux

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
