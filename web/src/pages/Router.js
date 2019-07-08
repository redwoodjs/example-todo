import { BrowserRouter, Route, Link } from "react-router-dom";

import InvoicePage from "./InvoicePage";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={InvoicePage} />
      </>
    </BrowserRouter>
  );
};

export default Router;
