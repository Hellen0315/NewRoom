import React from "react";
import { BrowserRouter } from "react-router-dom";
import Results from "./components/Results/Results";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Results />
      </BrowserRouter>
    </div>
  );
}
