import React from "react";
import PropTypes from "prop-types";

const GifGridComponent = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__backInDown">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

GifGridComponent.propTypes = {};

export default GifGridComponent;
