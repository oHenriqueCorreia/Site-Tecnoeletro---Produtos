import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../src/styles.css";
import ProdutosPage from "../src/pages/produtos-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProdutosPage />
  </StrictMode>,
);
