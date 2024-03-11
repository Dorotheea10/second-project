import React from "react";

class ImageComponent extends React.Component {
  render() {
    const { src, altText } = this.props;

    return <img src={src} alt={altText} />;
  }
}

export default ImageComponent;
