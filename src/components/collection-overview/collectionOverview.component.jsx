import React from "react";
import "./collectionOverview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectiionForPreview } from "../../redux/reducers/shop-reducer/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";
const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectiionForPreview
});
export default connect(mapStateToProps)(CollectionOverview);
