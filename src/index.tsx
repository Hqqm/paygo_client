import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./App";
import { ThemeManager } from "ThemeManager";

const root = document.getElementById("root");

const render = () => {
  if (root)
    ReactDOM.render(
      <ThemeManager>
        <App />
      </ThemeManager>,
      root
    );
};

if (module.hot) {
  module.hot.accept("./App", function() {
    render();
  });
}

render();
