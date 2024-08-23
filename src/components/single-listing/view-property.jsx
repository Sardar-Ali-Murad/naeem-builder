import React from "react";
import data from "../listing/data";
import { useSearchParams } from "react-router-dom";

const viewProperty = () => {
  let [currentItem, setCurrentItem] = React.useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  React.useEffect(() => {
    setCurrentItem(
      data?.find((singleItem) => Number(singleItem?.id) === Number(projectId))
    );
  }, [projectId]);
  return (
    <section class="view-property">
      <div class="details">
        <div className="listingMainImagWrap thumb">
          <img
            src={currentItem?.imageSrc}
            className="listingMainImg"
            alt="Modern Home Renovation"
          />
        </div>

        <h3 class="name hidden">{currentItem?.name}</h3>

        <p class="location">
          <i class="fas fa-map-marker-alt"></i>
          <span>{currentItem?.location}</span>
        </p>

        <div class="info">
          <p>
            <strong>Owner:</strong> {currentItem?.extraDetails?.owner}
          </p>
          <p>
            <strong>Site Type:</strong> {currentItem?.extraDetails?.siteType}
          </p>
          <p>
            <strong>Project Type:</strong>
            {currentItem?.extraDetails?.projectType}
          </p>
        </div>

        <div class="descriptions">
          <h4 className="name hidden">Project Description</h4>
          <p className="f-15">{currentItem?.extraDetails?.description}</p>
        </div>

        <div class="amenities">
          <h4 className="name hidden">Amenities Provided</h4>
          <ul>
            {currentItem?.extraDetails?.amenities?.map((singleItem, index) => {
              return (
                <li key={index} className="f-15">
                  {singleItem}
                </li>
              );
            })}
          </ul>
        </div>

        <div class="previous-state">
          <h4 className="name hidden">Previous State</h4>
          <ul>
            {currentItem?.extraDetails?.previousState?.map((state, index) => {
              return (
                <li key={index} className="f-15">
                  <strong className="f-15 mr-5">
                    {state?.feature?.toUpperCase()}:
                  </strong>
                  {state?.state}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default viewProperty;
