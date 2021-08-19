import React from "react";
import { Button } from "reactstrap";

const Search = () => {
  return <>
    <div className="mt-3 mb-4 search d-flex justify-content-center align-items-center">
      <input className="mt-0 mb-0" type="text" placeholder="Buscar..." />
      <Button color="info" className="mt-0 mb-0 ml-1">Buscar</Button>
    </div>
  </>
}

export default Search;
