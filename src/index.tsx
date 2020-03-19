import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import { store } from "./store";

const root = document.getElementById("root");

const render = () => {
  if (root)
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root
    );
};

if (module.hot) {
  module.hot.accept("./App", function() {
    render();
  });
}

render();
