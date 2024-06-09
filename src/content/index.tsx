import React from "react";
import { createRoot } from "react-dom/client";

import { Content } from "./Content";

const shadowWrapper = document.createElement("div");

createRoot(shadowWrapper).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
);
