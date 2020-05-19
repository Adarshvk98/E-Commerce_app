import React from "react";
import "./directory-menu.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySelector } from "../../redux/reducers/directory-reducer/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelector
});
export default connect(mapStateToProps)(DirectoryMenu);
