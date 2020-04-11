import React from "react";
import MenuItem from "../menu-item/menu-item";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jacktes.png",
          id: 2,
          linkUrl: "",
        },
        {
          title: "shoes",
          imageUrl: "https://i.ibb.co/0jqHpnp/shoes.png",
          id: 3,
          linkUrl: "",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/hats.png",
          id: 4,
          size: "large",
          linkUrl: "",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
