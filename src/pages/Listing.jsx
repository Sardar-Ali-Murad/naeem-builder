import React from "react";
import Home from "../components/listing/Home";
import Services from "../components/listing/Services";
import Listing from "../components/listing/Listing";

const ListingPage = () => {
  return (
    <div className="contact_page_container">
      <Home />
      <Services />
      <Listing />
    </div>
  );
};

export default ListingPage;
