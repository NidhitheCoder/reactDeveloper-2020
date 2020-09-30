import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "HATS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "SNEAKERS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 2,
          linkUrl: ""
        },
        {
          title: "JEANS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 3,
          linkUrl: ""
        },
        {
          title: "WOMENS",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "MENS",
          size: "large",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({  id,...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
