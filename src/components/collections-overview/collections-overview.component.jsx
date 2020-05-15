import React from "react";
import { selectCollectionForOverview } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview";

import "./collections-overview.styles.scss";
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForOverview,
});

export default connect(mapStateToProps)(CollectionOverview);
