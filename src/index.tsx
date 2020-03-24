import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "@lib/history";
import { configureAppStore } from "./store";
import { App } from "app";

const store = configureAppStore();
const root = document.getElementById("root");

const render = () => {
  if (root)
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      root
    );
};

if (module.hot) {
  module.hot.accept("./app", function() {
    render();
  });
}

render();
