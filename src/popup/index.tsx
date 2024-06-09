import React from "react";
import { createRoot } from "react-dom/client";

import Popup from "./Popup";

import "~/global.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
