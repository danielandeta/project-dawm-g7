import React from "react";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Information from "./Information.js";
import Images from "./Images.js";

function News() {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <Information/>
        </div>
      </div>
    </>
  );
}

export default News;